import React, {Component} from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import request from '../../util/request';
import API from '../../util/API';

const FormItem = Form.Item;

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            User: '',
            Password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userChange = this.userChange.bind(this);
    }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        debugger
      if (!err) {
        let params = {
            user: values.userName,
            Password: values.password
        }
       request.post(API.register, params).then(res => {
            if (res.code !== 0) {
                message.error(res.message);
            } else {
                message.success('注册成功');
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',res.data.user);
                this.props.history.push('/home');
            }
        });
      }
    });
  }

  userChange(e) {
    this.setState({ User: e.target.value });
  }
  
  PasswordChange(e) {
    this.setState({ Password: e.target.value });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} value= {this.state.User}  onChange={this.UserChange}/>} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} value= {this.state.Password}  onChange={this.PasswordChange}/>} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
    
          <div>
            <Button type="primary" htmlType="submit" className="login-form-button">
                注册
            </Button>
          </div>
        </FormItem>
      </Form>
    );
  }
}
const LoginForm = Form.create()(login);

export default LoginForm;