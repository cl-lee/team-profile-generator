const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// 1st gather info
// with Inquirer eventually

let newEngineer = new Engineer("Mana", 123, "test@test.com", "cl-lee");

let team = [];
team.push(newEngineer);

// 2nd put info onto page template (from .\src\page-template.js)
let renderHTMLDocument = render(team);

// 3rd generate output (fs writeFile)
fs.writeFile(outputPath, renderHTMLDocument, (err) =>
err ? console.error(err) : console.log('Success!'));