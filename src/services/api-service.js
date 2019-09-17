import config from '../config'
import TokenService from './token-service';

const apiService = {
  getChar(){
    let id = TokenService.getID()
    return fetch(`${config.API_ENDPOINT}home/${id}`,{
      headers:{
        "Authorization": `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  sendChar(char){
    console.log(char)
    let id = TokenService.getID()
    return fetch(`${config.API_ENDPOINT}home/create`, {
      headers:{
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        'Content-type':'application/json'
      },
      method:'POST',
      body: JSON.stringify(char)
    })
  }
}

export default apiService