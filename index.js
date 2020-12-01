const inquirer = require("inquirer");
const questions = require("./questions");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");

// function to write readme file
function writeToFile(fileName, data) {
    return fs.writeFileSync((process.cwd(), fileName), data);
}

// function to initialize the function
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Making your README now...");
        writeToFile("READMEexample.md", generateMarkdown(response));
    })
}

// function to call initialize
init();

