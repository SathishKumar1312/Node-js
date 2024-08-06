#!/usr/bin/env node

// yargs is a package used to have the process.argv in key-value pairs {Object} where argv is an array
const yargs = require('yargs');

//   Process.argv used in CLI options : `--optionName=value`
const { argv } = yargs(process.argv);

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
        console.log("Try entering a valid pokemon name with the option : --pokemon={pokemonName}")
    }
}

pokemonMoves(argv.pokemon)