import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import Routers from './routes/index';
import configureStore from './store/configureStore';
const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Routers/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
