console.log('Welcome to RPS game ');


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


// Function to get Human choice 
function getHumanChoice(){
    let humanChoice = prompt('Please pick your choice [Rock | Paper | Scissors]');
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}




//Global variables to store human and computer scores
 
function playGame(){


   let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice,computerChoice){

    

// draw case
    if ( humanChoice === computerChoice) {
        console.log(` It's a draw! Both players chose ${humanChoice}.`);
       
        // win case
    } else  if ( (humanChoice === 'rock' && computerChoice === 'scissors') || 
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')){
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    humanScore += 1;
                    // lose case     
    } else {
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore += 1;
                    
    }
}


playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());

console.log(`Your score: ${humanScore}
Computer score: ${computerScore}`);

if (humanScore > computerScore) {
    console.log('Congratulations you win!');
    
} else if (humanScore === computerScore) {
    console.log(`It's a draw! better luck next time.`);
    
}
 else {
    console.log('Game Over! You fought well, but fell short.');
    
}
}


playGame();