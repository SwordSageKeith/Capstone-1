import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import './temp.css';
import Header from'./Header';
import Character from './Character';
import Login from './Login';
import Create from './Create';
import TokenService from '../services/token-service'
import NewUser from './newUser'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      login: false
    }
  };

  changeLogin = (val) => {
    this.setState({login: val})
  }
  
  ifToken = () => {
    if (TokenService.getAuthToken()){
      return (
        <Switch>
          <Route exact path = '/' render = {(props) => <Login func={()=> this.changeLogin} {...props}/>}/>
          <Route path = '/login' render = {(props) => <Login func={()=> this.changeLogin} {...props}/>}/>
          <Route path = '/home' component = {Character}/>
          <Route path = '/create' component = {Create}/>
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route path = '/user' component = {NewUser}/>
          <Route path = '/' render = {(props) => <Login func={()=> this.changeLogin} {...props}/>}/>
        </Switch>
      )
    }
  }

  render(){
    return (
      <section>
        <link href="https://fonts.googleapis.com/css?family=Chilanka|Dosis:600&display=swap" rel="stylesheet"></link>
        <Route path = '/' component={Header}/>
        {this.ifToken()}
        

      </section>
    );
  }
}


export default App;
