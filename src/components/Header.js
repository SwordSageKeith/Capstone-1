import React from 'react';
import tokenService from '../services/token-service'

 class Header extends React.Component{
  /*constructor(props){
    super(props);
  }*/
  handleCreate = (event)  =>{
    event.preventDefault();
    this.props.history.push('/create');
  }
  handeleLogout = (event) => {
    event.preventDefault();
    tokenService.clearAuthToken();
    this.props.history.replace('/login');
  }
  handleHome = (event) => {
    event.preventDefault();
    this.props.history.push('home');
  }

   render() {
    return <header>
    <h1>Character Generator</h1>
    <button className = "offset head" onClick = {this.handleCreate}>New Character</button>
    <button className = "head" onClick = {this.handleHome}>Home</button>
    <button className = "head" onClick = {this.handeleLogout}>Log out</button>
  </header>
   }
 }

 export default Header;