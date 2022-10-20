import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import index from './views/login/index'
import dashborad from './views/dashborad/dashborad';
import 'antd/dist/antd.min.css';
//私有组件方法
import PrivateRouter from './router/privateRouter';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }



render(){
  return (
    // HashRouter URL带上#
   /* Switch用于精确匹配功能 */
   /** 请加上exact 要不然路由匹配不到 ,当有子级的时候，父级不能加exact，要不然子级路由找不到 */
   <div className='test'>
   <BrowserRouter>
    <Switch> 
      <Route exact   component={index} path='/'></Route>
      <PrivateRouter   component={dashborad}   path='/dashborad' /> 
    </Switch>
   </BrowserRouter>
   </div>
  );
}
}

export default App;
