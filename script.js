/* using integer values for choices:
    0: rock
    1: paper
    2: scissors

    using integer values for declaring winners:
    0: comp
    1: player
    2: tie
*/

function computerPlay() {
    let choice;
    choice = Math.floor(Math.random()*3);

    return choice;
}

function playerSelect() {
    let response = prompt("Rock, Paper, Scissors!: ");
    response = response.toLowerCase();

    let choice;
    if(response === "rock") {
        return 0;
    }
    else if(response === "paper") {
        return 1;
    }
    else if(response === "scissors") {
        return 2;
    }
    
    return null;
}

function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return 2;
        
    }
    else if(computerSelection === 0) { //  ROCK
        if(playerSelection === 2) { //  SCISSORS
            return 0;
        }
        else {
            return 1;
        }
    }
    else if(computerSelection === 1) { //  PAPER
        if(playerSelection === 0) { //  ROCK
            return 0;
        }
        else {
            return 1;
        }
    }
    else if(computerSelection === 2) { //  SCISSORS        
        if(playerSelection === 1) { //  PAPER   
            return 0;
        }
        else {
            return 1;
        }
    }
}

function game() {
    let playerScore=0, compScore=0;

    for(let i=0; i<5; i++) {
        playerSelection = playerSelect();
        computerSelection = computerPlay();

        while(playerSelection === null) {
            console.log("invalid response. choose either rock, paper or scissors.");
            playerSelection = playerSelect();
            computerSelection = computerPlay();
        }

        let result = playRound(computerSelection, playerSelection);

        while(result === 2) {
            console.log("tie! replay round!")
            result = playRound(computerPlay(), playerSelect());
        }

        if(result === 0) {
            console.log("computer won this round!")
            compScore++;
        }
        else if(result === 1) {
            console.log("you won this round!")
            playerScore++;
        }
    }   

    if(playerScore > compScore) {
        prompt(`Congratulations! You won!\nComputer: ${compScore}, You: ${playerScore}`);
    }
    else{
        prompt(`You lost! :(\nComputer: ${compScore}, You: ${playerScore}`);
    }
}


game();