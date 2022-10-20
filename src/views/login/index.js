import React, { Component } from 'react'
import '../../styles/login.scss'

import Login from './login'
import Register from './register'


export default class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         formType:'login'
      };
    }
    loginOrRegister = (value) =>{
      //赋值新值
        this.setState({
            formType:value
        })
    }
   
  render() {
    return (
      <div className="form-wrap">
       <div>
        {this.state.formType ==='login'? <Login loginOrRegister={this.loginOrRegister}></Login>:<Register loginOrRegister={this.loginOrRegister}></Register>}
       </div>
      </div>
    )
  }
}
