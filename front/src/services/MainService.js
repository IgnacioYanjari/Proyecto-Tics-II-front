import decode from "jwt-decode";
import {message} from "antd";

message.config({
  top: 70
});

class MainService {
  // Initializing important variables
  constructor(domain) {
    this.domain = domain || "http://localhost:3000"; // API server domain
    this.fetch = this.fetch.bind(this);
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      // Checking if token is expired. N
      if (decoded.exp < Date.now() / 1000 || decoded.exp === null) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  fetch(url, options, messageSuccess, messageFail) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(res => this._checkStatus(res, messageSuccess, messageFail))
      .then(async response => {
        if (response) {
          return response.json();
        } else {
          return {status: "fail"};
        }
      });
  }

  _checkStatus = async (
    response,
    messageSuccess = null,
    messageFail = null
  ) => {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      if (messageSuccess) message.success(messageSuccess);
      return response;
    } else {
      if (messageFail) message.error(messageFail);
      console.log(response);
    }
  };
}

export default MainService;
