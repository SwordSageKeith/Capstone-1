import React from 'react';
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service';

class Login extends React.Component{
  handlesubmit = (event)  =>{
    event.preventDefault();
    this.props.history.push('/home');
  }

  handleAuthSubmit = ev => {
    ev.preventDefault();
    let x = document.getElementById("LoginForm").elements
    AuthApiService.postLogin({
      username: x.username.value,
      password: x.password.value
    })
    .then(res => {
      x.username.value = ''
      x.password.value = ''
      TokenService.saveAuthToken(res.authToken)
      TokenService.saveID(res.id)
      this.props.history.push('/home')
    })
  }
  handleNewUser = ev => {
    ev.preventDefault()
    let x = document.getElementById("LoginForm").elements
    AuthApiService.postUser({
      username: x.username.value,
      password: x.password.value
    })
    .then(res => {
      //console.log(res)
      x.username.value = ''
      x.password.value = ''
    })
  }

  render (){
    return <form id = "LoginForm">
      <label htmlFor="username">Username: </label>
      <input  id = "username" type = 'text' placeholder = "Username"/>
      <label htmlFor="password">Password</label>
      <input id = "password" type = 'text' placeholder = "Password"/>
      <button type="submit" id="login" onClick = {this.handleAuthSubmit}>Login</button>
      <button type = "submit" onClick = {this.handleNewUser} >New User</button>
    </form>}
}
export default Login;