// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        name: name;
        id: id;
        email: email;
    }

    getName() {
        this.name;
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