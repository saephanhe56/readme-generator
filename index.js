// TODO: Include packages needed for this application
    const inquirer = require("inquirer");
    const generateMarkdown = require("./utils/generateMarkdown");
    const fs = require('fs');
    console.log("Welcome! Answer the following questions to begin.")
    
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Can you describe your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this project?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a License",
        choices: ["GNU", "MPL 2.0", "MIT", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Would you like to allow other developers to contribute?",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide instructions on how to test the project",
    },
    {
        type: "input",
        name: "github",
        message: "what is your Github Username?",
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            return console.log(err);
        }
        console.log("Success!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile("README.md", markdownText);
    });
}

// Function call to initialize app
init();