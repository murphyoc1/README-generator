// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'murphyoc',
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
        default: 'README-generator',
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
    },
    {
        type: 'input',
        message: "Describe extra steps to help with installation.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide an example of your project's usage.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['AGPLv3', 'GPLv3', 'Unlicense', 'LGPLv3', 'Mozilla', 'Apache', 'MIT', 'GNU', 'Open'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Your README.md file has ben generated!")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);

        const markdown = generateMarkdown(data);
        console.log(markdown);

        await writeFileAsync('./dist/README.md', markdown);
    } catch (error) {
        console.log(err);
    }
};

// Function call to initialize app
init();
