import React, { Component, Fragment } from 'react'
import { Button, Form, Input, Select, Table, Pagination, Modal, Switch } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { selectcompanyListByPage } from '../../api/accout'
import '../../styles/login.scss'



export default class companyInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visibile: false,
      //查询条件
      key: '',
      //表头
      columns: [
        { title: '公司名称', dataIndex: 'companyName', key: 'companyName', width: 200 },
        { title: '联系人', dataIndex: 'contacts', key: 'contacts' },
        { title: '联系电话', dataIndex: 'contactsPhone', key: 'contactsPhone', width: 200 },
        { title: '企业地址', dataIndex: 'companyAddress', key: 'companyAddress', align: 'center', width: 300 },
        {title:'禁启用',dataIndex:'id',key:'id',render:(row,col)=>{
          return <Switch onChange={this.onHandSwitch.bind(row)}  checkedChildren="启用" unCheckedChildren="禁用" ></Switch>
        }},
        {
          title: '操作', dataIndex: 'operate', key: 'operate', align: 'center',
          render: (row, col) => {
            return <div>
              <Button type='primary' onClick={this.updateClick.bind( row,col)}>编辑</Button>
              <Button type='dashed' onClick={this.delClick.bind(row, col)}>删除</Button>
            </div>

          }
        },
      ],
      page: {
        page: 1,
        size: 10,
        total: 0

      },
      optionsData: [
        { key: 0, label: '禁用' },
        { key: 1, label: '正常' },
        { key: 2, label: '恢复' }
      ],
      //表的数据
      data: []
    }
  }

  //生命周期挂载完成
  componentDidMount() {
    this.getList();
  };
  /**获取列表 */
  getList = () => {
    const data = {
      key: this.state.key,
      page: this.state.page.page,
      size: this.state.page.size,
    }
    selectcompanyListByPage(data).then(response => {
      const res = response.data.data
      if (res) {
        const pageC = Object.assign({}, this.state.page, { total: res.total })
        this.setState({
          data: res.records,
          page: pageC
        })
      }


    })
  }
  // 关键字搜索
  onFinish = (value) => {
    console.log(value);
    this.setState({
      key: value.companyName,
      page: 1,
      size: 10,
    })
    this.getList();
  }
  //获取状态
  handChange = (value) => {
    console.log(value);
  }
  //编辑
  updateClick = () => {

  }
  onHandSwitch(row){
      console.log(row);
  }
  //删除
  delClick = (row,col) => {
    console.log(row);
    console.log(col);
      this.setState({
        visibile:true
      })
  }
  cancelVisible=()=>{
    this.setState({
      visibile:false
    })
  }


  // 改变页大小的方法
  changeSize = (current, pageSize) => {
    const page = Object.assign(this.state.page, { size: pageSize })
    this.setState({
      page: page
    })
  }
  //改变当前页码
  pageChange = (current) => {
    const page = Object.assign(this.state.page, { page: current })
    this.setState({
      page: page
    })
    this.getList();
  }

  render() {
    return (
      <Fragment>
        <Form layout='inline' onFinish={this.onFinish}>
          <Form.Item label="企业名称" name="companyName" >
            <Input placeholder='请输入企业名称'></Input>
          </Form.Item>
          <Select style={{ width: 120, 'margin-right': '20px' }} onChange={this.handChange} allowClear >
            {this.state.optionsData.map((item =>
              <option value={item.key}>{item.label}</option>
            ))}


          </Select>
          <Button type="primary" icon={<SearchOutlined />} htmlType="submit"> 搜索</Button>
        </Form>
        <div className='firstTableCla'>
          <Table rowKey="id" dataSource={this.state.data} pagination={false} columns={this.state.columns} bordered style={{ 'margin-top': '10px' }} />;
        </div>
        <Pagination
          defaultCurrent={3}
          total={this.state.page.total}
          pageSizes={[5, 10, 20]}
          showSizeChanger
          pageSize={this.state.page.size}
          currentPage={this.state.page.page}
          onShowSizeChange={this.changeSize}
          onChange={this.pageChange}
        />


        {/* 弹窗 */}
        <Modal title="提示" 
        visible={this.state.visibile}
         onOk={this.clickVisible}
         onCancel={this.cancelVisible}
         okText="确认"
         cancelText="取消">
          <p>确定删除这一条数据吗？</p>
         </Modal>
      </Fragment>
    )
  }
}
