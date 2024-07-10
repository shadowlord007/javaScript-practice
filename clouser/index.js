//////// Clouser ////////////////////


function createGame() {

    let score = 0;
    
    function increaseScore(points) {
        score += points;
        console.log(`Current Score: ${score}pts`);
    }
    
    function decreaseScore(points) {
        score -= points;
        console.log(`Current Score: ${score}pts`);
    }
    
    function getScore(points) {
        return score;
    }
    return {increaseScore, decreaseScore, getScore}
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(3);
console.log(`The final socre is ${game.getScore()}pts`);

