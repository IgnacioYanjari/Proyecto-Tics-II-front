import decode from "jwt-decode";
import MainService from "services/MainService";

class AuthService extends MainService {
  // Initializing important variables
  constructor(domain) {
    super(domain);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(username, password) {
    // Get a token from api server using the fetch api
    return this.fetch(
      `${this.domain}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({
          username,
          password
        })
      },
      "Ingreso Realizado Correctamente",
      "Credenciales invalidas"
    ).then(res => {
      if (res) {
        this.setToken(res.token); // Setting the token in localStorage
        return Promise.resolve(res);
      }
    });
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }
}

export default AuthService;
