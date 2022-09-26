import React, { Component, Fragment } from 'react'
import '../../styles/login.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Row ,Col } from 'antd';
//验证一个工具类；
import { validate_password } from '../../utils/validate'
//API 
import {Login} from '../../api/accout'


// 这个页面：
// <Row gutter={13}>是两块col之前的间隔
// block 自动扩到父容器或控制不超出。


export default class login extends Component {
    constructor(props) {
      super(props)
      this.state = {
         
      }
    }
     onFinish = (values) => {
      console.log('可接受的form: ', values);
      Login().then(response=>{

      }).catch(error=>{

      })
    };

    toRegister=()=>{
      //获取父组件index.js的loginOrRegister方法并传值，
        this.props.loginOrRegister("register");
    }
    
  render() {
    return (
        <Fragment>
          <div className="form-header">
            <h4 className="column">登录</h4>
            <span onClick={this.toRegister}>账号注册</span>
          </div>
        <div className="form-content">
        <Form name="normal_login" className="login-form"  initialValues={{ remember: true,}}
          onFinish={this.onFinish} >
             <Form.Item name="username" rules={[ 
              { required: true, message: '请填写你的邮箱!' }, 
             { type:'email', message: '邮箱输入不正确!' },]} >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
              </Form.Item>
              <Form.Item name="password" rules={[
                 {required: true, message: '请填写你的密码!'},
                 {min: 6, message: '密码不能小于6位!' }, 
                 {pattern: /^[0-9]*$/, message: '请输入数字!'},
                 {pattern:validate_password,message:'请继续验证新的验证哈哈'} ]} >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password"  placeholder="Password" />
              </Form.Item>
              <Form.Item name="yzm" rules={[
                 {required: true, message: '请填写你的验证码!'}, 
                //    ({getFileValue})=>({  // ES6A解构
                //   validator(rule,value){
                //     if( value.length<6){
                //       return Promise.reject("密码不能填写6位！")
                //        
                //     }else{
                   // return Promise.resolve();

               // }
                //  }),
                 ]}  >
              <Row gutter={13}>
                <Col span={16}> <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Code" /></Col>
                <Col span={8}><Button type='danger' block>获取验证码</Button></Col>
              </Row>
              </Form.Item>
              <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                  </Form.Item>
                  {/* <span className="login-form-forgot"> 忘记密码</span> */}
            </Form.Item>
           <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
           
          </Form.Item>
        </Form>
        </div>
        </Fragment>
      
    )
  }
}
