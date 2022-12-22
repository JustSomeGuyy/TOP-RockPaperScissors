
// creates a random choice for the computer
function getComputerChoice() {
    let choice = '';
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1){
        let choice = 'rock';
        return choice;
    } else if (random === 2){
        let choice = 'paper';
        return choice;
    } else {
        let choice = 'scissors';
        return choice;
    }
}

// let playerChoice = prompt('Rock, paper, or scissors?');
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
// plays a round and determines the winner.

function playRound(playerSelection, computerSelection) {
    let outcome = ``;
    if(playerSelection === computerSelection){
       outcome = `It's a draw!`
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        outcome = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++
    } else {
        outcome = `You lose! ${computerSelection} beats ${playerSelection}.`
        computerScore++;
    }
    return outcome
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let roundScore = `Player: ${playerScore} - Computer: ${computerScore}`;
    for (let round = 0; round > 6; round++){
        playRound(round);
        if(playerScore || computerScore > 3)break;
    }
    console.log(roundScore);
}

console.log(())