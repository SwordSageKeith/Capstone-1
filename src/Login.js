import React from 'react';

function Login(props){

  return (
    <form className = "flexColumn">
      <label for="username">Username: </label>
      <input  id = "username" type = 'text' placeholder = "Username"/>
      <label for="password">Password</label>
      <input id = "password" type = 'text' placeholder = "Password"/>
      <button id="login">Login</button>
    </form>);
}
export default Login;