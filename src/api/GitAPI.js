import axios from "axios";

const GitAPI = {
  _baseUrl: 'https://api.github.com/',
  
  getUser(user) {
    return axios.get(`${this._baseUrl}users/${user}`);
  },
  
  getUserRepositories(user) {
    return axios.get(`${this._baseUrl}users/${user}/repos`);
  }
}

export default GitAPI;