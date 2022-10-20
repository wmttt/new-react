import React, { Component, Fragment } from 'react'
import '../styles/layout.scss'
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
//   antd
import { Menu } from 'antd'
import Router from '../router';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu



export default class aside extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  //固定菜单处理
  renderMenu = ({ title, key }) => {
    return (
      <Menu.Item key={key}><Link to={key}>{title}</Link></Menu.Item>
    )
  }
  //有二级菜单处理
  renderSubMenu = ({ title, key, child }) => {
    return (
      <SubMenu key={key} icon={< UserOutlined />} title={title}>
        {
          child && child.map(item => {
            return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
          })
        }
      </SubMenu>
    )
  }

  render() {
    return (
      <Fragment>
        <h1 className="logo"><span>LOGO</span></h1>
        <Menu
          theme="dark"
          mode="inline"

          style={{
            height: '100%',
            borderRight: 0,
          }}
        >
          {
            Router && Router.map(firstItem => {
              return firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem);
            })
          }

        </Menu>
      </Fragment>
    )
  }
}
