/**
 * Created by 0easy-23 on 2017/9/27.
 */
import React, {Component} from 'react';
import { Button, Input, message } from 'antd';
import Dropdown from '../Common/dropdown';
import request from '../../util/request';
import API from '../../util/API';

export default class extends Component {
    constructor(props) {
		super(props);
		this.state = {
            title: '',
            conten: '',
            typeName: '',
            type: ''
        }
        this.titleChange = this.titleChange.bind(this);
        this.contenChange = this.contenChange.bind(this);
        this.childrenClick = this.childrenClick.bind(this);
        this.saveValue = this.saveValue.bind(this);
	}

    componentDidMount() {
        let params = this.props.match.params.id
        if (params) {
            // 编辑页面
            request.get(API.homedetail+'?id='+params).then(res => {
                if (res.code !== 0) {
                   message.error(res.message);
                } else {
                    this.setState({
                       title: res.data.result[0].title,
                       conten: res.data.result[0].conten,
                       typeName: res.data.result[0].typeName,
                       type: res.data.result[0].type
                    })
                }
       
            })
        } 
    }
    goBack () {
        this.props.history.goBack()
    }
    titleChange(e) {
        this.setState({ title: e.target.value });
    } 
    contenChange(e) {
        this.setState({ conten: e.target.value });
    }
    childrenClick(obj) {
        this.setState({typeName: obj.typeName, type: obj.type})
    }

    saveValue() {
        let params = {
            title: this.state.title,
            conten: this.state.conten,
            typeName: this.state.typeName,
            type: this.state.type,
        }
        if (this.props.match.params.id) {
            params.id = this.props.match.params.id
            request.post(API.updatahome, params).then(res => {
                message.success(res.message);
                if (res.code === 0) {
                    this.props.history.push('/home');
                } 
            })   

        } else {
            request.post(API.homeadd, params).then(res => {
                message.success(res.message);
                if (res.code === 0) {
                    this.props.history.push('/home');
                } 
            })   
        }
        
    } 
    render() {
        return (
            <div className="home_detail_container">
                <Button type="primary" onClick= {() => this.goBack()}>返回</Button>
                <h2>新增</h2>
                <div>
                   <label>标题</label> 
                   <Input value= {this.state.title} placeholder='请输入标题' onChange={this.titleChange}/>
                </div>
                <div style={{marginTop: 15,marginBottom: 15}}>
                    <label>标题</label> 
                    <Dropdown childrenClick={this.childrenClick} typeName={this.state.typeName}/>
                </div>
                <div>
                    <label>内容</label>
                   <textarea type='textarea' value= {this.state.conten} style={{width: '100%', height: 300 }} onChange={this.contenChange}></textarea>
                </div>
                <Button type="primary" style={{marginTop: 20,marginLeft: 200}} onClick={this.saveValue}>保存</Button>
            </div>
        )
    }
}