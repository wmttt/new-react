import React, { Component } from 'react'
//antd
import '../styles/layout.scss'
import { Layout } from 'antd'
const { Header} =Layout;

export default class layoutHeader extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
        <Layout className='layout-wrap'>
             <Header className='layout-header'>头部</Header>
        </Layout>
           
      
    )
  }
}
