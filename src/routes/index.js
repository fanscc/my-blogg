/**
 * Created by 0easy-23 on 2017/9/1.
 * 路由配置（方便本地打包，使用了HashRouter）;
 * tips:开发环境下面使用了browserHistory，打包上线的时候需要服务器进行配置;
 */
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import NotFound from '../components/Common/NotFound';
import APP from '../App';
import Login from '../components/login/index';
import Regist from '../components/login/regist';
import Home from '../containers/home/Index';
import HomeAddIndex from '../components/home/addIndex';
import HomeDetailIndex from '../components/home/DetailIndex';
const Routes = () => (
    <Router>
        <div style={{height: '100%'}}>
        <Switch>
            <Route path='/login' component={Login}/> 
            <Route path='/regist' component={Regist}/> 
            <APP>            
                 <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/homeadd" exact component={HomeAddIndex}/>
                    <Route path="/homeedit/:id" exact component={HomeAddIndex}/>    
                    <Route path="/homedetail/:id" component={HomeDetailIndex}/>        
                    <Route path='/404' component={NotFound} />
                    <Redirect from='*' to='/404' />
                 </Switch>
            </APP> 
            </Switch>
        </div>                
    </Router>
);

export default Routes;