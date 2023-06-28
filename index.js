// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the title of your project.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter your Github username.',
        name: 'githubUser',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter a short description of what your application is.',
        name: 'descriptionWhat',
    },
    {
        type: 'input',
        message: 'Please enter a short description of why you created this application.',
        name: 'descriptionWhy',
    },
    {
        type: 'input',
        message: 'Please enter a short description of how someone might use this application.',
        name: 'descriptionHow',
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to install your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples on how to use your application.',
        name: 'use',
    },
    {
        type: 'list',
        message: 'Please choose a license to use for your project.',
        choices: ['MIT', 'Apache', 'GNU'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please list your collaborators and credit any third-party assets.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to test your app.',
        name: 'test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
