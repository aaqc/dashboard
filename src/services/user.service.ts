import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://api.aaqc.ml/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'drones');
  }

  getUserBoard() {
    return axios.get(API_URL + 'me', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
