const maxNbr = 100
const minNbr = 30
const answer = Math.floor(Math.random() * (maxNbr - minNbr +1)) + minNbr

let running = true
let attempts = 0
let guess;

while(running) {
    guess = window.prompt(`Enter the number betwwen ${minNbr} - ${maxNbr}`)
    guess = Number(guess)
    if (isNaN(guess)) {
        window.alert('Please enter a valid number')
    }
    else if (guess < minNbr || guess > maxNbr) {
        window.alert(`Please enter a number between ${minNbr} - ${minNbr}`);
    }
    else {
        attempts++
        if (guess < answer) {
            window.alert('Too low. Try again.')
        }
        else if (guess > answer) {
            window.alert('Too high. Try again.')
        }
        else{
            window.alert(`Congratulations! You guessed the number ${answer} in total ${attempts} attempts`)
            running = false
        }
    }
    
}