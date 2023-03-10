// Defines and exports the Intern class
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool = () => this.school;
    getRole = () => "Intern";
}

module.exports = Intern;