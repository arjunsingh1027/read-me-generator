const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the command line to install dependencies?',
        default: "npm i"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does this project do?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about using your repo?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command line do you use to test your repo?',
        default: "npm test"
    },
];

module.exports = questions;
