'user strict'

const NumOfRolls = parseInt(prompt("How many times do you want to roll?"));

    let sum = 0;
    for (let i = 0; i < NumOfRolls; i++) {
        sum += Math.floor(Math.random() * 6 + 1);
    }

document.querySelector('#dice').innerHTML = "The sum of dice rolls is " +sum+ "!";

