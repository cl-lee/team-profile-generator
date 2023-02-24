// ---Defines and exports the Employee class---
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = () => {
        return this.name;
    };
    getId() {
        this.id;
    };
    getEmail() {
        this.email;
    };
    getRole() {
        return "Employee"
    };
}

module.exports = Employee

let testEmployee = new Employee("Hans", 2423, "test@test.com");
console.log(testEmployee.getName());