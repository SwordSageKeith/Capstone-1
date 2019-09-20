import config from "../config";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(res => {
      return res.json();
    }).catch(er => {
      console.log(er)
    });
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => {
      return res.json();
    }).catch(er => {
      console.log(er)
    });
  }
};

export default AuthApiService;
