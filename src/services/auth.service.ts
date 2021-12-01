import axios from "axios";

const API_URL = "https://api.aaqc.ml/";


class AuthService {
  login(username: string, password: string) {
    let querystring = require('querystring');
    return axios
      .post(API_URL + "auth", 
      querystring.stringify({
        "username": username, 
        "password": password
        }), {
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name: string, email: string, password: string) {
    return axios.post(API_URL + "register", {
      email,
      name,
      password
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
