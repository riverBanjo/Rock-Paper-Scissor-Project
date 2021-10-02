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

function playRound( playerSelection, computerSelection ){
    if( playerSelection === computerSelection ){
        return 'Draw!';
    }else if( ( playerSelection === 'rock' && computerSelection === 'paper' ) || ( playerSelection === 'paper' && computerSelection === 'scissors' ) || ( playerSelection === 'scissors' && computerSelection === 'rock' ) ){
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }else{
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    }
}