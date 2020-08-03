import axios from 'axios';

const baseURL = process.env.GRIDSOME_API_URL;

class Axios {
  constructor(url) {
    this.axios = axios;
    this.baseURL = url;
  }

  api() {
    return axios.create({
      baseURL: this.baseURL
    });
  }
}

const Repository = new Axios(baseURL);


export default Repository.api();