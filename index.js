const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Gathers employee information using Inquirer

let team = [];

async function initiateApplication() {
  // Inquirer prompts
  let { managerName, employeeID, emailAddress, officeNumber } =
    await inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's NAME:",
      },
      {
        type: "input",
        name: "employeeID",
        message: "Please enter the team manager's EMPLOYEE ID:",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Please enter the team manager's EMAIL ADDRESS:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the team manager's OFFICE NUMBER:",
      },
    ]);

  let newManager = new Manager(
    managerName,
    employeeID,
    emailAddress,
    officeNumber
  );

  team.push(newManager);
  
  // 2nd put info onto page template (from .\src\page-template.js)
  let renderHTMLDocument = render(team);

  // 3rd generate output (fs writeFile)
  fs.writeFile(outputPath, renderHTMLDocument, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

initiateApplication();
