import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import index from './views/login/index'
import 'antd/dist/antd.min.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }



render(){
  return (
    // HashRouter URL带上#
   /* Switch用于匹配单个路由功能 */
   <div className='test'>
   <BrowserRouter>
    <Switch> 
      <Route component={index}  path='/'></Route>
    
    </Switch>
   </BrowserRouter>
   </div>
  );
}
}

export default App;
