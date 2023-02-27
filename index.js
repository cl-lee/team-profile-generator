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
  let { managerName, managersID, managersEmail, officeNumber } =
    await inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's NAME:",
      },
      {
        type: "input",
        name: "managersID",
        message: "Please enter the team manager's EMPLOYEE ID:",
      },
      {
        type: "input",
        name: "managersEmail",
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
    managersID,
    managersEmail,
    officeNumber
  );
  
  console.log(newManager);
  team.push(newManager);

  let { menu } = await inquirer.prompt({
    type: "list",
    name: "menu",
    message: "Please select an option:",
    choices: [
      {
        name: "Add an engineer",
        value: "addEngineer",
        desciption: "Add an engineer",
      },
      {
        name: "Add an intern",
        value: "addIntern",
        desciption: "Add an intern",
      },
      {
        name: "Finish building the team",
        value: "finishTeamBuilding",
        desciption: "Finish building the team",
      },
    ],
  });

  let { engineersName, engineersID, engineersEmail, githubUsername } =
    await inquirer.prompt([
      {
        type: "input",
        name: "engineersName",
        message: "Please enter the engineer's NAME:",
      },
      {
        type: "input",
        name: "engineersID",
        message: "Please enter the engineer's EMPLOYEE ID:",
      },
      {
        type: "input",
        name: "engineersEmail",
        message: "Please enter the engineer's EMAIL ADDRESS:",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "Please enter the engineer's GITHUB USERNAME:",
      },
    ]);

    let newEngineer = new Engineer(
      engineersName,
      engineersID,
      engineersEmail,
      githubUsername,
    );
    
    console.log(newEngineer);
    team.push(newEngineer);

  // if (menu === "addEngineer")

  console.log(menu);

  // 2nd put info onto page template (from .\src\page-template.js)
  let renderHTMLDocument = render(team);

  // 3rd generate output (fs writeFile)
  fs.writeFile(outputPath, renderHTMLDocument, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

initiateApplication();
