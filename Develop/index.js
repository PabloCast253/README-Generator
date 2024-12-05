// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Provide a short description for your project"
},
{
    type: "input",
    name: "motivation",
    message: "What was your motivation for making this project"
},
{
    type: "input",
    name: "problemsSolves",
    message: "What problems does this application solve"
},
{
    type: "input",
    name: "learned",
    message: "What did you learn while making this application"
},
{
    type: "input",
    name: "installation",
    message: "What are the installation instructions needed to run your project "
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for usage of this application include screenshots/links to video as needed"
},
{
    type: "input",
    name: "collaborators",
    message: "please name and collabortors that helped write the code and their github or email as well",
},
{
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
},
{
    type: "input",
    name: "contributions",
    message: "What are the contribution guidlines"
},
{
    type: "input",
    name: "tests",
    message: "Provide some tests for you application and how to run the tests"
},

{
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("README.md generated!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile("README.md", markdown);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
