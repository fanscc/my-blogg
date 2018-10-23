/**
 * Created by 0easy-23 on 2017/9/27.
 */
import React, {Component} from 'react';
import { Button, message } from 'antd';
import Dropdown from '../Common/dropdown';
import request from '../../util/request';
import API from '../../util/API';

export default class extends Component {
    constructor(props) {
		super(props);
		this.state = {
            title: 'js',
            conten: 'a',
            typeName: '所有种类',
            type: ''
        }
	}
    componentDidMount() {
     let params = this.props.match.params.id
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
    goBack () {
        debugger
        this.props.history.goBack()
    }
    render() {
        debugger
        return (
            <div className="home_detail_container">
                <Button type="primary" onClick= {() => this.goBack()}>返回</Button>
                <h2>
                    <label>标题:</label>
                    {this.state.title}   
                </h2> 
                     <label>种类:</label>
                    <Dropdown disabled={true} typeName={this.state.typeName}/>
                <div>
                    <label>内容:</label>
                    {this.state.conten}   
                </div>
            </div>
        )
    }
}