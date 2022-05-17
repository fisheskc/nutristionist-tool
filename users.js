import { Customers } from "./customers.js";

export class Users {
    constructor(users, id) {
        this.id = id;
        this.users = users;
    }

    // need search match in getCustomerEdit from filter
    getUserSearch(arr) {
      let searchBox = document.getElementById("search-box").value;
        findUser = arr.includes(searchBox);
        if (!findUser) {
          return `${this.users} has not found her customer`;
        }
        //searches the name entered against the array
        let searchCust = arr.filter((x) => {
          return x === searchBox;
        });
        return `${this.users} found ${searchCust} as a customer`;
      }
}

let janeUser = new Users("Jane Major");
console.log(janeUser);