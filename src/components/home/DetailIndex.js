/**
 * Created by 0easy-23 on 2017/9/27.
 */
import React, {Component} from 'react';
import { Button } from 'antd';
export default class extends Component {
   
    componentDidMount() {
      
    }
    goBack () {
        debugger
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="home_detail_container">
                <Button type="primary" onClick= {() => this.goBack()}>返回</Button>
                <h2>
                    js原理   
                </h2> 
                <div>
                    大厦卡号是咖啡好看撒飞洒发
                </div>
            </div>
        )
    }
}