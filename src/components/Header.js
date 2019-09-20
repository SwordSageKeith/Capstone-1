import React from 'react';
import tokenService from '../services/token-service'
import TokenService from '../services/token-service';

 class Header extends React.Component{
  handleCreate = (event)  =>{
    event.preventDefault();
    this.props.history.push('/create');
    this.setState({})
  }
  handeleLogout = (event) => {
    event.preventDefault();
    tokenService.clearAuthToken();
    this.props.history.replace('/login');
    this.setState({})
  }
  handleHome = (event) => {
    event.preventDefault();
    if (TokenService.getID())
      this.props.history.push('home');
    this.setState({})
  }
  ifToken =() =>{
    if (TokenService.getAuthToken()){
      return (
        <React.Fragment>
          <h1>Character Generator</h1>
          <button className = "offset head" onClick = {this.handleCreate}>New Character</button>
          <button className = "head" onClick = {this.handleHome}>Home</button>
          <button className = "head" onClick = {this.handeleLogout}>Log out</button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h1 className = "offset">Character Generator</h1>
          <button className = "head" onClick = {this.handleHome}>Home</button>
        </React.Fragment>
      )
    }
  }

   render() {
    return <header>
    {this.ifToken()}
  </header>
   }
 }

 export default Header;