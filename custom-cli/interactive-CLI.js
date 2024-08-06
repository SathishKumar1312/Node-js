#!/usr/bin/env node

//   Inquirer is a package to get the input in the command line
const inquirer = require('inquirer');

const questions1 = [{
        type: 'input',
        name: 'name',
        message: "What's your name?",
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter the password : '
    }
];

const questions2 = [{
    type: 'input',
    name: 'pokemonName',
    message: 'Enter the pokemon name : '
}]

inquirer.prompt(questions1).then(answers => {
    if(answers.name == 'sk' && answers.password == '12'){
        console.log(`Hi ${answers.name}!, Welcome to the world of Pokemon!`);
        inquirer.prompt(questions2).then(answers => {
            pokemonMoves(answers.pokemonName);
        })
    }
    else {
        console.log('Invalid credentials, only admin has the access.sk12');
    }
});


async function pokemonMoves(pokiName) {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokiName}`)
        const pokemon = await data.json();
        const moves = pokemon.moves.map(({ move }) => move.name);
        let fiveMoves = moves.slice(0, 5);
        console.log(`some of the attacks of ${pokiName} are :`);
        fiveMoves.forEach((element,i) => {
            console.log(`${i+1}.`,element);
        });

    } catch (e) {
        console.log("Try entering a valid pokemon name")
    }
}