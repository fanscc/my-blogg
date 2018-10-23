/**
 * Created by 0easy-23 on 2017/9/27.
 */
import React, {Component} from 'react';
import NavTop from './components/Common/nav-top';
import NavSide from './components/Common/nav-side';


export default class extends Component {

    componentDidMount() {
     
    }
    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <NavTop/>
                    <div style={{ display: 'flex',flex:1}}>
                        <NavSide/>
                        <div className="content">
                            <div className="main-content">
                                 {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}