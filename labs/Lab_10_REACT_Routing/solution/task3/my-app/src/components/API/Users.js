import axios from "axios";

export default class Users {
  static async getAll() {
    try {
      const responce = await axios.get("https://swapi.dev/api/people/");
      return responce;
    } catch (e) {
      console.log(e);
    }
  }
  static async getById(id) {
    try {
      const responce = await axios.get("https://swapi.dev/api/people/" + id);
      return responce;
    } catch (e) {
      console.log(e);
    }
  }
}
