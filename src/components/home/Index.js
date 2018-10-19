/**
 * Created by 0easy-23 on 2017/9/27.
 */
import React, {Component} from 'react';
import Dropdown from '../Common/dropdown';
import { Input, Button, List } from 'antd';
import {Link} from 'react-router-dom';

let itemArr = [
    {
        id: 1,
        title: 'js的原理',
        type: '1'
    },
    {
        id: 2,
        title: 'Vue的原理',
        type: '2'
    },
    {
        id: 1,
        title: 'React的原理',
        time: '2018-1-2'
    },
    {
        id: 1,
        title: 'js的原理',
        time: '2018-1-2'
    },
    {
        id: 2,
        title: 'Vue的原理',
        time: '2018-1-2'
    },
    {
        id: 1,
        title: 'React的原理',
        time: '2018-1-2'
    },
    {
        id: 1,
        title: 'js的原理',
        time: '2018-1-2'
    },
    {
        id: 2,
        title: 'Vue的原理',
        time: '2018-1-2'
    },
    {
        id: 1,
        title: 'React的原理',
        time: '2018-1-2'
    }
]
export default class extends Component {
    componentDidMount() {
      
    }
    render() {
        return (
            <div className="home_container">
                <div className="home_header" style={{display: 'flex'}}>
                    <Dropdown />
                    <div style={{display: 'flex', marginLeft: 20}}>
                        <Input style={{ width: 200,marginRight:10}}/> 
                        <Button type="primary" icon="search">Search</Button>
                    </div>
                    <Button type="danger" style={{ marginLeft: 20}}>最新</Button>
                    <Link to={'/homeadd'}>
                        <Button type="primary" style={{ marginLeft: 20}}>新增</Button>
                    </Link>
                </div>
                <div className="home_item" >
                    <List
                        bordered
                        dataSource={itemArr}
                        renderItem={(item,index) => (
                            <List.Item> 
                                <span style={{color: '#1890ff', marginRight: 10, width: 15}}> {index - 0 + 1}</span> 
                                <p className="item_title"> {item.title}</p> 
                                <p style={{width: 160}}>
                                <Link to={'/homedetail/1'}>
                                    <Button type="primary" size="small" style={{marginRight: 10 }}>查看</Button>
                                </Link>
                                <Link to={'/homeadd'}>
                                    <Button type="primary" size="small" style={{marginRight: 10 }}>编辑</Button>
                                </Link>
                                <Button type="danger" size="small"> 删除</Button>
                                </p>
                            </List.Item>
                        )
                    }
                    />
                </div>
            </div>
        )
    }
}