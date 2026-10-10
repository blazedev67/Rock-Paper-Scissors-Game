console.log('Welcome to RPS game ');


// Function to get computer choice 
function getComputerChoice(){
   let result = Math.floor(Math.random() * 3) +1 ;

    switch (result) {
        case 1:
            result ='Rock';
            break;
        case 2:
            result = 'Paper';
            break;
        case 3:
            result = 'Scissors';
            break;
    }
 
    return result;
  
    
}

console.log(getComputerChoice());

// Function to get Human choice 
function getHumanChoice(){
    let humanChoice = prompt('Please pick your choice [Rock | Paper | Scissors]');
    return humanChoice;
}

console.log(getHumanChoice());

//Global variables to store human and computer scores

let humanScore = 0;
let computerScore = 0;