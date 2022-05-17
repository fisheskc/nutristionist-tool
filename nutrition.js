import { Customers } from "./customers.js";
import { Users } from "./users.js";
//console.log("main nutrition js");

let customerNames = ["Gious Wallis", "Sara Davis", "Richard Williams"];
let searchBox = document.getElementById("search-box").value;
//let answerFind = customersNames.map((name) => {
    //return new Customers(name)
//});
customerNames.forEach((name) => {
    return Customers.add(name);
})
console.log(Customers.customerList);

const first = Customers.find(customerNames[0]);
console.log(first);

let janeUser = new Users("Jane Major");
console.log(janeUser);

let searchBut = document.getElementById("search-res");
searchBut.addEventListener("click", () => {
    const name = janeUser.getUserSearch(customerName);
    // Customers.delete(name);
    inputSearch = `<h5 class="cust-array"> ${name}</h5>`;
  return (searchUser.innerHTML = inputSearch);
});
