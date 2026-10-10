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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){

    if ( humanChoice ===) {
        
    } else {
        
    }
}