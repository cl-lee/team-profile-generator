// Defines and exports the Engineer class
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.github = github;
    }

    getGithub = () => "this.github";
    getRole = () => "Engineer";
}