import React from "react";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  newSubmit = ev => {
    ev.preventDefault();
    let x = ev.target;
    AuthApiService.postLogin({
      username: x.username.value,
      password: x.password.value
    }).then(res => {
      if (res.error){
        this.setState({error: res.error})
      }
      else if (res) {
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveID(res.id);
        this.props.func(true);
        this.props.history.push("/home");
        this.setState({})
      }
    });
  };

  newUser = () => {
    this.props.history.push('user')
  }

  render() {
    return (
      <form id="LoginForm" onSubmit={this.newSubmit}>
        <p id="error">{this.state.error}</p>
        <label htmlFor="username">Username: </label>
        <br />
        <input id="username" type="text" placeholder="Username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input id="password" type="text" placeholder="Password" required />
        <button type="submit" id="login">
          Login
        </button>
        <br />
        <button type="button" id="newUser" onClick={this.newUser}>
          New User
        </button>
      </form>
    );
  }
}
export default Login;
