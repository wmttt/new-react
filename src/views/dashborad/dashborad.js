import React, { Component } from 'react'
//antd
import '../../styles/layout.scss'
import { Layout } from 'antd'
//layout组件
import Aside from '../../component/aside'
import LayoutHeader from '../../component/header'
import ContainerMain from '../../component/containerMain'
const {Sider,Header, Content} =Layout;



export default class dashborad extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
    
      <Layout className='layout-wrap'>  
        <Sider trigger={null} width="250px" className='layout-sider'><Aside/></Sider>
        <Layout>
        <Header className='layout-header'><LayoutHeader/></Header>
            <Content className='layout-main'>
              <ContainerMain />
            
            </Content>
        </Layout>
      </Layout>
    )
  }
}
