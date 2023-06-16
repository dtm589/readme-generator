//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//Array of questions for user input
const questions = [
    //full name
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?',
    },
    //github user name
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    //email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    //projects title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    //description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    //installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process for your project.',
    },
    //usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe your projects usage.',
    },
    //contribuiton
    {
        type: 'input',
        name: 'contribution',
        message: 'Please describe the contributing guidelines for your project.'
    },
    //tests
    {
        type: 'input',
        name: 'test',
        message: 'Please describe the test insturctions for your project.'
    },
    //license
    {
        type: 'list',
        name: 'license',
        message: 'Please choose which license your project is using.',
        choices: ['GNU GPLv3', 'GNU LGPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'none'],
    },
];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if(error) throw error;
        console.log('Your README.md file is ready to look at!')
    });
 }

//function to initialize app
function init() {
    return inquirer.createPromptModule(questions);
};

// Function call to initialize app
init();
