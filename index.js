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
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter a short description of your project. What is it? Why did you create it? How might someone use it?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to install your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples on how to use your project.',
        name: 'use',
    },
    {
        type: 'list',
        message: 'Please choose a license to use for your project.',
        choices: ['MIT', 'Apache', 'GNU', 'None'],
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
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), "utf8", function (error) {
     if (error) {
            console.log(error);
        } else {
            console.log(`Success! Data written to ${fileName}.md.`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(response.title, response);
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function call to initialize app
init();
