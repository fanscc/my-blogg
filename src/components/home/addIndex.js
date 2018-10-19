/**
 * Created by 0easy-23 on 2017/9/27.
 */
import React, {Component} from 'react';
import { Button, Input } from 'antd';
import request from '../../util/request';
import API from '../../util/API';

export default class extends Component {
    constructor(props) {
		super(props);
		this.state = {
            title: '',
            conten: 'a'
        }
        this.titleChange = this.titleChange.bind(this);
        this.contenChange = this.contenChange.bind(this);
        this.saveValue = this.saveValue.bind(this);
	}

    componentDidMount() {
      
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
    saveValue() {
        let params = {
            title: 'aa',
            conten: 'dsadsadsa',
            type: 1
        }
        let datas = request.post(API.homeadd, params)
        console.log(datas)
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
                <div>
                    <label>内容</label>
                   <textarea type='textarea' value= {this.state.conten} style={{width: '100%', height: 300 }} onChange={this.contenChange}></textarea>
                </div>
                <Button type="primary" style={{marginTop: 20,marginLeft: 200}} onClick={this.saveValue}>保存</Button>
            </div>
        )
    }
}