/**
 * Created by 0easy-23 on 2017/9/1.
 * 路由配置（方便本地打包，使用了HashRouter）;
 * tips:开发环境下面使用了browserHistory，打包上线的时候需要服务器进行配置;
 */
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavTop from '../components/Common/nav-top';
import NavSide from '../components/Common/nav-side';

import NotFound from '../components/Common/NotFound';
import Home from '../containers/home/Index';
import HomeAddIndex from '../components/home/addIndex';
import HomeDetailIndex from '../components/home/DetailIndex';
const Routes = () => (
    <div className="app">
        <div className="wrapper">
            <NavTop/>
            <div style={{ display: 'flex',flex:1}}>
                <NavSide/>
                <div className="content">
                    <div className="main-content">
                        <Router>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/homeadd" exact component={HomeAddIndex}/>    
                                <Route path="/homedetail/:id" component={HomeDetailIndex}/>        
                                <Route path='/404' component={NotFound} />
                                <Redirect from='*' to='/404' />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Routes;