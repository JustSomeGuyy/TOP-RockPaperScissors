
// creates a random choice for the computer
function getComputerChoice() {
    let choice = '';
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1){
        let choice = 'Rock';
        return choice;
    } else if (random === 2){
        let choice = 'Paper';
        return choice;
    } else {
        let choice = 'Scissors';
        return choice;
    }
}

function playerChoice(){
    let playerInput=prompt("Rock, Paper or Scissors:")
    let trimmedInput=playerInput.trim();
    let lowerCaseInput=trimmedInput.toLowerCase();
    let capitalizedInput=lowerCaseInput.charAt(0).toUpperCase()+lowerCaseInput.slice(1);
    while(!['Rock','Paper','Scissors'].includes(capitalizedInput)){
        trimmedInput=playerInput.trim();
        lowerCaseInput=trimmedInput.toLowerCase();
        capitalizedInput=lowerCaseInput.charAt(0).toUpperCase()+lowerCaseInput.slice(1);
    }
    return capitalizedInput;
}


const playerSelection = playerChoice();
const computerSelection = getComputerChoice();
// plays a round and determines the winner.

function playRound(playerSelection, computerSelection) {
    let outcome = ``;
    if(playerSelection === computerSelection){
       outcome = `It's a draw!`
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        outcome = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        outcome = `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    return outcome
}

function game(){
    let roundResult = '';
    let computerScore = 0;
    let playerScore = 0;
    let playerTurn = '';
    let computerTurn = '';
    let rounds = parseInt(prompt('How many rounds do you want to play?'));
    for (let i = 0; i < rounds; i++){
        computerTurn = computerSelection;
        playerTurn = playerSelection;
        roundResult = playRound(playerTurn, computerTurn);
        if (roundResult.includes(`You win`)){
            playerScore += 1;
        } else if (roundResult.includes(`You lose`)){
            computerScore += 1;
            console.log(`${roundResult} The score is: ${playerScore} to ${computerScore}`);
        } else {
            i -= 1;
            console.log(`${roundResult} The score is: ${playerScore} to ${computerScore}`);
        }
    }
    if (playerScore > computerScore){
        console.log(`You win the game! ${playerScore} to ${computerScore}!`)
    } else {
        console.log(`You lost the game! ${computerScore} to ${playerScore}!`)
    }
}

game();
