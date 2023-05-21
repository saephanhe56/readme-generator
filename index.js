// TODO: Include packages needed for this application
    const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage",
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing",
    },
    {
        type: "input",
        name: "tests",
        message: "Tests",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile("", markdownText);
    });
}

// Function call to initialize app
init();
