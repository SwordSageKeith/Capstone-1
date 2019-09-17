import config from '../config'

const TokenService = {
  saveAuthToken(token, id) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  saveID(id){
    window.localStorage.setItem(config.ID, id)
  },
  getID(){
    return window.localStorage.getItem(config.ID)
  },
  clearID(){
    window.localStorage.removeItem(config.ID)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService
