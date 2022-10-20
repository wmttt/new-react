import React, { Component } from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom' 
//私有组件方法
import PrivateRouter from '../router/privateRouter'
//公司管理 组件
import companyInfo from '../views/viewBreeding/company-info'
//流通信息 组件
import flowInfo from '../views/viewBreeding/flow-info'

//自动化工程 不适合我这个命名
// const files=require.context("../views/",true,/\.js$/) //自动去查找.js的文件。
 


export default class containerMain extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
     <Switch>
            <PrivateRouter exact path="/dashborad/viewBreeding/company-info" componment={companyInfo}/>
            <PrivateRouter exact path="/dashborad/viewBreeding/flow-info" componment={flowInfo}/>
     </Switch>
    )
  }
}
