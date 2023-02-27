const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// --- Inquirer Questions ---
// Manager Questions
const managerQuestions = [
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
];

// Menu Questions
const menuQuestions = {
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
      value: "finishedBuildingTeam",
      desciption: "Finish building the team",
    },
  ],
};

// Engineer Questions
const engineerQuestions = [
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
];

// Intern Questions
const internQuestions = [
  {
    type: "input",
    name: "internsName",
    message: "Please enter the intern's NAME:",
  },
  {
    type: "input",
    name: "internsID",
    message: "Please enter the intern's EMPLOYEE ID:",
  },
  {
    type: "input",
    name: "internsEmail",
    message: "Please enter the intern's EMAIL ADDRESS:",
  },
  {
    type: "input",
    name: "internsSchool",
    message: "Please enter the intern's SCHOOL NAME:",
  },
];

// --- Functions to run inquirer prompts and associated codes ---
// Menu for user to add an engineer, add an intern or finish building the team
async function checkMenu() {
  let { menu } = await inquirer.prompt(menuQuestions);
  console.log(menu);
  if (menu === "addEngineer") {
    await addAnEngineer();
    checkMenu();
  } else {
    console.log("Finished building team");
  }
}

async function addAnEngineer() {
  let { engineersName, engineersID, engineersEmail, githubUsername } =
    await inquirer.prompt(engineerQuestions);
  let newEngineer = new Engineer(
    engineersName,
    engineersID,
    engineersEmail,
    githubUsername
  );
  team.push(newEngineer);
}

// Gathers employee information using Inquirer
let team = [];

async function initiateApplication() {
  // Inquirer prompts
  let { managerName, managersID, managersEmail, officeNumber } =
    await inquirer.prompt(managerQuestions);

  let newManager = new Manager(
    managerName,
    managersID,
    managersEmail,
    officeNumber
  );

  team.push(newManager);

  await checkMenu();




  // const { internsName, internsID, internsEmail, internsSchool } =
  //   await inquirer.prompt(internQuestions)
  // let newIntern = new Intern(
  //   internsName,
  //   internsID,
  //   internsEmail,
  //   internsSchool
  // );

  // console.log(newIntern);
  // team.push(newIntern);

  // 2nd put info onto page template (from .\src\page-template.js)
  let renderHTMLDocument = render(team);

  // 3rd generate output (fs writeFile)
  fs.writeFile(outputPath, renderHTMLDocument, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

initiateApplication();
