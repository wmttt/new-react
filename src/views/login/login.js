import React, { Component, Fragment } from 'react'
import '../../styles/login.scss'
//增加白名单路由跳转
import { withRouter } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Row ,Col,message } from 'antd';
//验证一个工具类；
import { validate_password } from '../../utils/validate'
//API 
import {Login , GetCode} from '../../api/accout'
import { name } from 'file-loader';
// 
import { setToken } from '../../utils/session';

// 这个页面：
// <Row gutter={13}>是两块col之前的间隔
// block 自动扩到父容器或控制不超出。

//包裹白名单
export default  withRouter  (class login extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:'',
         code_disable:false, //验证码禁用
         code_Loading:false,
         code_text:'发送验证码'
      }
    }
    //登录
     onFinish = (values) => {
     
      Login(values).then(response=>{
        const data=response.data;
        console.log('可接受的form: ', response.data.code);
        if (data.code === '0000') {
          setToken(data.data.token)
          this.props.history.push('/dashborad')
        }
        
      }).catch(error=>{

      })
    };
//获取验证码
    getCode=()=>{
      this.setState({
        code_Loading:true,
        code_text:'发送中'
      })
     
      if(!this.state.name){
        message.error("请输入邮箱号码")
        return false;
      }
        const data={
            name:this.state.name //邮箱
        }
        GetCode(data).then(response=>{
          this.countdown();
          console.log(response)
        }).catch(error=>{
          console.log(error);
        })
    };
    //input 实时取值,react 没有双向绑定。 只能以setState
    inputChange=(e)=>{
        let  value=e.target.value;
        this.setState({
          name:value
        })
    }
    //倒计时：
    countdown=()=>{
      let timer=null;
      let sec=60;
      this.setState({
        code_Loading:false,
        code_disable:true,
        // code_text:sec+'s'
      })
      //setInterval \clearInterval
      //setTimeout \clearTimeout 
     timer=setInterval(()=>{
      sec--;
      if(sec<=0){
        this.setState({
          code_disable:false,
          code_text:'重新获取'
        })
        clearInterval(timer);
        return false;
      }
      this.setState({
        code_text:sec+'s'
      })
     },1000)
    }
    toRegister=()=>{
      //获取父组件index.js的loginOrRegister方法并传值，
        this.props.loginOrRegister("register");
    }
    
  render() {
    const { name ,code_Loading,code_disable,code_text}=this.state
    return (
       //    ({getFileValue})=>({  // ES6A解构
                //   validator(rule,value){
                //     if( value.length<6){
                //       return Promise.reject("密码不能填写6位！")
                //        
                //     }else{
                   // return Promise.resolve();

               // }
                //  }),
        <Fragment>
          <div className="form-header">
            <h4 className="column">登录</h4>
            <span onClick={this.toRegister}>账号注册</span>
          </div>
        <div className="form-content">
        <Form name="normal_login" className="login-form"  initialValues={{ remember: true,}}
          onFinish={this.onFinish} >
             <Form.Item name="name" rules={[  
              { required: true, message: '请填写你的邮箱!' }, 
            //  { type:'email', message: '邮箱输入不正确!' },
          ]} >
                <Input onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
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
                 ]}  >
              <Row gutter={13}>
                <Col span={16}> <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Code" /></Col>
                <Col span={8}><Button type='danger' block disabled={code_disable} loading={code_Loading} onClick={this.getCode}>{code_text}</Button></Col>
              </Row>
              </Form.Item>
            
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                  </Form.Item>
                  {/* <span className="login-form-forgot"> 忘记密码</span> */}
       
           <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
           
          </Form.Item>
        </Form>
        </div>
        </Fragment>
      
    )
  }
})
