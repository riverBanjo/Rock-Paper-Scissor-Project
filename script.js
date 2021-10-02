// Returns string 'rock', 'paper', or 'scissors' based on a random number
function computerPlay(){
    let numBetween1And3 = Math.floor( Math.random() * 3 + 1 );
    if( numBetween1And3 === 1 ){
        return 'rock';
    }else if( numBetween1And3 === 2 ){
        return 'paper';
    }else{
        return 'scissors';
    }
}

// Compares who won and returns result
function playRound( playerSelection, computerSelection ){
    if( playerSelection === computerSelection ){
        return 'Draw!';
    }else if( ( playerSelection === 'rock' && computerSelection === 'paper' ) || ( playerSelection === 'paper' && computerSelection === 'scissors' ) || ( playerSelection === 'scissors' && computerSelection === 'rock' ) ){
        return 'You Lose! ' + capitalizeFirstLetter( computerSelection ) + ' beats ' + playerSelection + '.';
    }else{
        return 'You Win! ' + capitalizeFirstLetter( playerSelection ) + ' beats ' + computerSelection + '.';
    }
}

// Takes a string and returns that string with a capital first letter.
function capitalizeFirstLetter( word ){
    return word.charAt( 0 ).toUpperCase() + word.slice(1);
}

function checkUserInput( userInput ){
    let isBadInput = true;
    let lowerCaseUserInput = userInput.toLowerCase();
    while( isBadInput ){
        if( lowerCaseUserInput === 'rock' || lowerCaseUserInput === 'scissors' || lowerCaseUserInput === 'paper' ){
            isBadInput = false;
        }else{
            lowerCaseUserInput = prompt( 'Invalid input. Please enter rock, paper, or scissors' ).toLowerCase();
        }
    }
    return lowerCaseUserInput;
}

// Plays 5 rounds
function game(){
    let roundCounter = 0;
    while( roundCounter < 5 ){
        // Get's user input
        let userInput = checkUserInput( prompt( 'Enter rock, paper, or scissors.' ) );
        let computerInput = computerPlay();
        // Logs output
        console.log( playRound( userInput, computerInput ) );
        roundCounter++;
    }
}

// Start game
game();