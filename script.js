

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

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let outcome = '';
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        let outcome = 'You lose! Paper beats Rock.';
        return outcome;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        let outcome = 'You win! Rock beats scissors.';
        return outcome;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        let outcome = 'You win! Paper beats rock.';
        return outcome;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        let outcome = 'You lose! Scissors beats Paper.';
        return outcome;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        let outcome = 'You lose! Rock beats scissors.';
        return outcome;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        let outcome = 'You win! Scissors beats paper.';
        return outcome;
    } else if (playerSelection === computerSelection) {
        let outcome = 'It\'s a draw!';
        return outcome;
    } else {
        let outcome = 'Something went wrong.';
        return outcome;
    }
}


console.log(playRound(playerSelection, computerSelection));
