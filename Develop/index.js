// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'connietran-dev',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("A valid GitHub username is required.");
                return false;
            } 
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log("A valid GitHub repo is required.");
                return false;
            } 
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log("A valid project title is required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: (description) => {
            if (description) {
                return true;
            } else {
                console.log("A valid project description is required.");
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
