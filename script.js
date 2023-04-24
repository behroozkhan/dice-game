// Selecting the elements from the HTML page that will be updated
let gameWinner = document.querySelectorAll('img')[0];
let attempts = document.querySelectorAll('#attempts')[0];
let score = document.querySelectorAll('#score')[0];
let percentage = document.querySelectorAll('#percentage')[0];
// Initializing variables to keep track of player attempts and score
let playerAttempt = 0;
let playerScore = 0;
let jsConfetti = new JSConfetti();

function diceSamulator(userPick) {
    let randNumber = Math.ceil(Math.random() * 6);
    if (randNumber === 1) {
        gameWinner.src = "./img/dice-1.png";
    } else if (randNumber === 2) {
        gameWinner.src = "./img/dice-2.png";
    } else if (randNumber === 3) {
        gameWinner.src = "./img/dice-3.png";
    } else if (randNumber === 4) {
        gameWinner.src = "./img/dice-4.png";
    } else if (randNumber === 5) {
        gameWinner.src = "./img/dice-5.png";
    } else if (randNumber === 6) {
        gameWinner.src = "./img/dice-6.png";
    }
    // Checking if the user's pick matches the random number generated
    if ((userPick === "one" && randNumber === 1) || (userPick === "two" && randNumber === 2) ||
        (userPick === "three" && randNumber === 3) || (userPick === "four" && randNumber === 4) ||
        (userPick === "five" && randNumber === 5) || (userPick === "six" && randNumber === 6)) {
        // If the player wins, increment their attempt and score counters, update the HTML elements with the new values,
        // and check if the player has reached certain score thresholds to display confetti
        playerAttempt++;
        playerScore++;
        console.log("You Won The Game.");
        console.log("Number Of Attempts: " + playerAttempt);
        console.log("Score: " + playerScore);

        attempts.innerHTML = "Attempts: " + playerAttempt;
        score.innerHTML = "Your Score: " + playerScore;
        percentage.innerHTML = "Winning Percentage: " + ((playerScore / playerAttempt * 100).toFixed(2) + "%");

        if (playerScore === 5) {
            jsConfetti.addConfetti({
                confettiRadius: 10,
                confettiNumber: 100
            });
        } else if (playerScore === 10) {
            jsConfetti.addConfetti({
                confettiRadius: 10,
                confettiNumber: 100
            });
        } else if (playerScore === 15) {
            jsConfetti.addConfetti({
                confettiRadius: 10,
                confettiNumber: 100
            });
        } else if (playerScore === 20) {
            jsConfetti.addConfetti({
                confettiRadius: 10,
                confettiNumber: 100
            });
        }
    }
    // If the player loses, increment their attempt counter, update the HTML elements with the new values, and
    // display a message
    else {
        playerAttempt++;
        attempts.innerHTML = "Attempts: " + playerAttempt;
        score.innerHTML = "Score:" + playerScore;
        percentage.innerHTML = "Winning Percentage: " + ((playerScore / playerAttempt * 100).toFixed(2) + "%") + "<br>";
        console.log("You Lost The Game: Try Again.");
        console.log("Number Of Attempts: " + playerAttempt);
        console.log("Your Score: " + playerScore);
    }
}
// Function to reset the game
function resetButton() {
    playerAttempt = 0;
    playerScore = 0;
    attempts.innerHTML = "Number Of Attempts: 0";
    score.innerHTML = "Your Score is: 0";
    percentage.innerHTML = "Winning Percentage: 0%";
}
