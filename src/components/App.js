import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import './temp.css';
import Header from'./Header';
import Character from './Character';
import Login from './Login';
import Create from './Create';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      login: false,
      create: false
    }
  };

  /*createElement() {
    let element;
    
  }*/

  render(){
    return (
      <section>
        <link rel="stylesheet" href = "temp.css"></link>
        <Route path = '/' component={Header}/>
        <Switch>
          <Route exact path = '/' component = {Login}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/home' component = {Character}/>
          <Route path = '/create' component = {Create}/>
        </Switch>
        

      </section>
    );
  }
}


export default App;
