import AxiosAcess from './services/axios-acess'

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(user, password, callback) {
    // const axiosacess = new AxiosAcess();
    // var retorno = axiosacess.post("login",[]);

    this.authenticated = user === "cs" && password === "cs123";
    this.authenticated && callback();
  }

  logout(callback) {
    this.authenticated = false;
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
