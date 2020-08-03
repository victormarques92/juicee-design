import axios from "axios";
import RepositoryFactory from "../repositories/RepositoryFactory";
import { resolve } from 'url';
const contacts = RepositoryFactory.get("contacts");

class Form {
  constructor(data) {
    this.originalData = data;
    for (let field in data) {
      this[field] = data[field];
    }
    this.errors = new Errors();
  }

  data() {
    let data = Object.assign({}, this);

    delete data.originalData;
    delete data.errors;

    return data;
  }

  reset() {
      for (let field in this.originalData) {
        this[field] = "";
      }
    }
    // add helper method post
    // post(origin, plan) {
    //   this.submit('post');
    // }
  async submit(origin, plan) {
    let currentData = this.data();
    currentData.origin = origin;
    currentData.plan = plan;
    try {
      let message = "";
      await contacts.store(currentData).then(res => {
        message = res.data.message
        this.onSuccess(res.data.message);
      });
      return Promise.resolve(message);
    } catch (error) {
      this.onFail(error.response.data.errors);
      return Promise.reject(error.response.data.errors);
    }
  }


  onSuccess(message) {
    this.errors.clear();
    this.reset();
  }

  onFail(errors) {
    this.errors.record(errors);
  }
}

class Errors {
  constructor() {
    this.errors = {};
  }
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }
  recordError(field, message) {
    this.errors[field] = [];
    this.errors[field][0] = message;
  }
  record(errors) {
    this.errors = errors;
  }
  clear(field) {
    if (field) {
      delete this.errors[field];
      return;
    }
    this.errors = {};
  }
  has(field) {
    return this.errors.hasOwnProperty(field);
  }
  any() {
    return Object.keys(this.errors).length > 0;
  }
}

export default Form;