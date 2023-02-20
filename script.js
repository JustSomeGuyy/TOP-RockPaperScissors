const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const scoreDisplay = document.getElementById('score');

let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

let rounds = prompt('How many rounds would you like to play?');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id;
   userChoiceDisplay.innerHTML = userChoice;
   generateComputerChoice()
   getResult()
   playRounds()
}));

function playRounds(){
    for(let i = 0; i < rounds; i++){
        if(playerScore === rounds/2){
            alert('You won the game!');
            break;
        } else if(computerScore === rounds/2){
            alert('You lose to a dumb computer!');
            break;
        }
       }    
};
// playRounds();

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    switch (randomNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        case 3:
            computerChoice = 'paper';
            break;
    }
    computerChoiceDisplay.textContent = computerChoice;
}

function getResult(){
    
    if(computerChoice === userChoice){
        result = `It's a draw!`;
    } else if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win!';
        playerScore ++;
    } else if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lost!';
        computerScore ++;
    } else if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win!';
        playerScore++;
    } else if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You win!';
        playerScore ++;
    } else if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You win!';
        playerScore++;
    } else if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You lost!'
        computerScore++;
    }
    let score = `${playerScore} - ${computerScore}`;
    resultDisplay.textContent = result;
    scoreDisplay.textContent = score;
}