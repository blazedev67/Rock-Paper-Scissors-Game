console.log('Welcome to RPS game ');

//Global variables to store scores

let humanScore = 0;
let computerScore = 0;

// Select HTML elements 

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');

// Function to get computer choice 
 function getComputerChoice(){
   let result = Math.floor(Math.random() * 3) +1 ;

    switch (result) {
        case 1:
            result ='rock';
            break;
        case 2:
            result = 'paper';
            break;
        case 3:
            result = 'scissors';
            break;
    }
 
    return result;
  
    
} 

// Function to play one round 
function playRound(humanChoice,computerChoice){

    // Check if the game has already ended 
        if(humanScore === 5 || computerScore === 5){
            return;
        }

        // Draw case
        if ( humanChoice === computerChoice) {
        results.textContent =` It's a draw! Both players chose ${humanChoice}.`;
       
        // win case
    } else  if ( (humanChoice === 'rock' && computerChoice === 'scissors') || 
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')){
                    results.textContent = `You win! ${humanChoice} beats ${computerChoice}. `;
                    humanScore += 1;

                    // lose case     
    } else {
                    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}. `;
                    computerScore += 1;
                    
    }

    // Display running score 
    results.textContent += `
    Your score: ${humanScore} 
    Computer score: ${computerScore}`;

 // Announce the overall winner 
if (humanScore === 5) {
    results.textContent += '\nCongratulations you won the game!';
    
} 
 else if (computerScore === 5){
    results.textContent += '\nGame Over! You fought well, but fell short.';  
}

}

// Event listeners for the three buttons 
rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
});






