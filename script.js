// Returns string 'rock', 'paper', or 'scissors' based on a random number.
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

// Returns result
function playRound( playerSelection, computerSelection ){
    if( playerSelection === computerSelection ){
        return 'Draw!';
    }else if( ( playerSelection === 'rock' && computerSelection === 'paper' ) || ( playerSelection === 'paper' && computerSelection === 'scissors' ) || ( playerSelection === 'scissors' && computerSelection === 'rock' ) ){
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }else{
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    }
}

// Plays 5 rounds
function game(){
    let gameCounter = 0;
    while( gameCounter < 5 ){
        let userInput = prompt( 'Enter rock, paper, or scissors.' );
        let computerInput = computerPlay();
        console.log( playRound( userInput, computerInput ) );
        gameCounter++;
    }
}

// Start game
game();