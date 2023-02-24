// Defines and exports the Manager class
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole = () => "Manager";
}