console.log('Welcome to RPS game ');

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

function getHumanChoice(){
    let humanChoice = prompt('Please pick your choice [Rock | Paper | Scissors]');
    return humanChoice;
}

console.log(getHumanChoice());
