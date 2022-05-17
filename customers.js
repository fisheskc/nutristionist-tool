
export class Customers {
    // customerList is a simple array of Customers objects
    // It is a static property i.e. it is stored in the Class, not for each objects
    // Note that you don't need to have static methods but this allows us to have the list of customers available anywhere we want to use a Customers object
    static customerList = Array();
    
    constructor(name, id, address) {
      // These are object (instance) variables
      // They are defined for each Customers object.
      this.name = name;
      this.id = id;
      this.address = address;
    }

    static putList(customers) {
        Customers.customerList = customers;
    }
    
    // Add a customer to the list.
    // Just pass in the customer name - it creates the Customers object for you.
    static add(name) {
        // Note that we access the static property using the class name
        Customers.customerList.push(new Customers(name));
    }
    static findIndex(name) {
       return Customers.customerList.reduce((_,nextCustomer, index) => {
            if (nextCustomer.nameMatch(name)) {
                return index;
            }
        })
    }

    static delete(name) {
        let deleteCustomer = findIndex(name)
        if(deleteCustomer == undefined) {
            return false
        }
        // deletes from putList Customers
        Customers.putList(Customers.customerList.splice(deleteCustomer, 1))
        console.log(deleteCustomer);
        return true;
    }
    
    // Find a customer (object) using its name
    static find(name) {
        console.log("finding customer : " + name);
        let foundCustomer = undefined;
        Customers.customerList.forEach((customer) =>
        {
            console.log(customer.getName());
            if (customer.nameMatch(name)) {
                console.log("Customer found");
                foundCustomer = customer;
            } else {
                return "Customer not found"
            }
        });

        return foundCustomer;            
    }
    
    getName() {
        return this.name;
    }
    
    nameMatch(name) {
        return this.getName() === name;
    }
    
}
