//   Inquirer is a third-party package to get the input (async)

const inquirer = require('inquirer');

const question = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? '
    },
    {
        type: 'input',
        name: 'age',
        message: 'What is your age? '
    },
    {
        type: 'input',
        name: 'sport',
        message: 'What is your favorite sport? '
    }
]

inquirer.prompt(question)
.then(answers => {
    console.log(`Hi ${answers.name}!`);
    console.log("age is : ",answers.age);
    console.log("favorite sport is : ",answers.sport);
});

//  readline is a built-in-module for getting input (async)

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`What's your name? `, name => {
    rl.question(`What's your age? `, age => {
        rl.question(`What's your favorite sport? `, sport => {
            console.log(`Hi ${name}!`);
            console.log("age is : ",age);
            console.log(`favorite sport : ${sport}`);
            rl.close();
        });
    });
});
