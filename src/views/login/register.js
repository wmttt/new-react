import React, { Component, Fragment } from 'react'
import '../../styles/login.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Row ,Col } from 'antd';



export default class register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
     onFinish = (values) => {
      console.log('可接受的form: ', values);
    };
    toRegister=()=>{
      //获取父组件index.js的loginOrRegister方法并传值，
        this.props.loginOrRegister("login");
    }
    
  render() {
    return (
  
        <Fragment>
          <div className="form-header">
            <h4 className="column">注册</h4>
            <span onClick={this.toRegister}>账号登录</span>
          </div>
        <div className="form-content">
        <Form name="normal_login" className="login-form"  initialValues={{ remember: true,}}
          onFinish={this.onFinish} >
             <Form.Item name="username" rules={[ { required: true, message: '请填写你的名字!', }, ]} >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password" rules={[ {required: true, message: '请填写你的密码!', }, ]}  >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password"  placeholder="Password" />
              </Form.Item>
              <Form.Item name="password" rules={[ {required: true, message: '请再次填写你的密码!', }, ]}  >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password"  placeholder="rePassword" />
              </Form.Item>
              <Form.Item name="yzm" rules={[ {required: true, message: '请填写你的验证码!', }, ]}  >
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
            {/* Or <a>现在注册</a> */}
          </Form.Item>
        </Form>
        </div>
        </Fragment>
      
    )
  }
}
