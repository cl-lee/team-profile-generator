// Defines and exports the Engineer class
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub = () => this.github;
    getRole = () => "Engineer";
}

module.exports = Engineer;