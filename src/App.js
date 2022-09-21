
import React from 'react';
import {Switch,Route,HashRouter} from 'react-router-dom'
import Home from './views/home'
import About from './views/about'
import './App.scss';

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
    <h1>第一个花鼓</h1>
   <HashRouter>
    <Switch>  
      <Route component={Home}  path='/'></Route>
      <Route component={About}  path='/about'></Route>
    </Switch>
   </HashRouter>
   </div>
  );
}
}

export default App;
