import React from "react";
import AuthApiService from "../services/auth-api-service";

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  newSubmit = ev => {
    ev.preventDefault();
    let x = ev.target;
    AuthApiService.postUser({
      username: x.username.value,
      password: x.password.value
    }).then(res => {
      if (res !== undefined) {
        this.setState({ error: res.error });
        if (!res.error) this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <form id="LoginForm" onSubmit={this.newSubmit}>
        <p id="error">{this.state.error}</p>
        <label htmlFor="username">What is your Username: </label>
        <br />
        <input id="username" type="text" placeholder="Username" required />
        <br />
        <label htmlFor="password">What is your Password:</label>
        <br />
        <input id="password" type="text" placeholder="Password" required />
        <br />
        <button type="submit" id="newUser">
          Create User
        </button>
      </form>
    );
  }
}
export default NewUser;
