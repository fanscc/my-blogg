/**
 * Created by 0easy-23 on 2017/9/27.
 */
import React, {Component} from 'react';
import Dropdown from '../Common/dropdown';
import { Input, Button, List, message, Pagination} from 'antd';
import {Link} from 'react-router-dom';
import request from '../../util/request';
import API from '../../util/API';

export default class extends Component {
    constructor(props) {
		super(props);
		this.state = {
            itemArr: [],
            type: '',
            typeName: '所有分类',
            searchtext: '',
            total: 0,
            page: 1
        }
        this.searchtextchange = this.searchtextchange.bind(this);
        this.search = this.search.bind(this);
        this.childrenClick = this.childrenClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    inithome() {
        request.get(API.indexhome).then(res => {
            if (res.code !== 0) {
                message.error(res.message)
            } else {
                debugger
                this.setState({itemArr: res.data.result})
                this.setState({total: res.data.tatal})
            }
        })
    }
    componentDidMount() {
       this.inithome()
    }
    childrenClick(obj) {
        this.setState({type: obj.type, typeName: obj.typeName})
    } 
    searchtextchange(e) {
        this.setState({searchtext:  e.target.value})
    }
    onChange(page) {
        this.setState({page: page},() => {
            this.search()
        })
    }
    search() {
        console.log(this.state.page)
        let params = {
            type: this.state.type,
            title: this.state.searchtext,
            page: this.state.page
        }
        request.get(API.indexhome+`?type=${params.type}&&title=${params.title}&&page=${params.page}`).then(res => {
            if (res.code !== 0) {
                message.error('查询失败')
            } else {
                this.setState({itemArr: res.data.result})
                this.setState({total: res.data.tatal})
            }
        })  
    }
    delehomelist(id) {
        request.post(API.delehome,{id: id}).then(res => {
            if (res.code !== 0 ){
                message.error('删除失败') 
            } else {
                message.success(res.message) 
                this.search()
            }
        })
    }
    render() {
        return (
            <div className="home_container">
                <div className="home_header" style={{display: 'flex'}}>
                    <Dropdown childrenClick={this.childrenClick} typeName={this.state.typeName}/>
                    <div style={{display: 'flex', marginLeft: 20}}>
                        <Input style={{ width: 200,marginRight:10}} value={this.state.searchtext} onChange={this.searchtextchange} placeholder='输入标题'/> 
                        <Button type="primary" icon="search" onClick={this.search}>Search</Button>
                    </div>
                    <Button type="danger" style={{ marginLeft: 20}}>最新</Button>
                    <Link to={'/homeadd'}>
                        <Button type="primary" style={{ marginLeft: 20}}>新增</Button>
                    </Link>
                </div>
                <div className="home_item" style={{borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8',borderRadius: 5}}>
                    <List
                        bordered
                        dataSource={this.state.itemArr}
                        renderItem={(item,index) => (
                            <List.Item> 
                                <span style={{color: '#1890ff', marginRight: 10, width: 15}}> {index - 0 + 1}</span> 
                                <p className="item_title"> {item.title}</p> 
                                <p style={{width: 160}}>
                                <Link to={`/homedetail/${item.id}`}>
                                    <Button type="primary" size="small" style={{marginRight: 10 }}>查看</Button>
                                </Link>
                                <Link to={`/homeedit/${item.id}`}>
                                    <Button type="primary" size="small" style={{marginRight: 10 }}>编辑</Button>
                                </Link>
                                <Button type="danger" size="small" onClick={() => this.delehomelist(item.id)}> 删除</Button>
                                </p>
                            </List.Item>
                        )
                    }
                    />
                </div>
                <Pagination current={this.state.page} pageSize={20} total={this.state.total} onChange={this.onChange} style={{marginTop: 15}}/>
            </div>
        )
    }
}