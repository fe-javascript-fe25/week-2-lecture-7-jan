// 1. 
// function hello() {
//     console.log('Hello World!');
// }

// hello();

// 2.
// function increase(c) {
//     return c + 1; 
// }
// let count = 0;
// console.log(increase(count));

// 3.
// console.log(randomize(7, 20));

// function randomize(min, max) {
//     let diff = max - min + 1;

//     return Math.floor(Math.random() * diff + min);
// }

// 4. 
// function getLength(str) {
//     return str.length;
// }

// console.log(getLength('jesper'));

// 5. // YYYY-MM-DD

// let correctInput = false;
// let year;

// while(!correctInput) {
//     const userInput = prompt('Ange ett datum i formatet YYYY-MM-DD');
//     if(checkUserInput) {
//         correctInput = true;
//         year = Number(userInput.substring(0, 4));
//     }
// }

// function checkUserInput(userInput) {
//     if(userInput.length === 10 && !isNaN(Number(userInput.substring(0, 4)))) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(`År ${year} ska jag lära mig att koda!`);

// 6.
// calculate(3, 5, '+');
// calculate(3, 5, '-');
// calculate(3, 5, '/');
// calculate(3, 5, '*');
// calculate(3, 5, 'hej');
// calculate(3, 5);

// function calculate(num1, num2, operator) {
//     if(isNaN(num1) || isNaN(num2)) {
//         console.log('Glöm inte skicka med 2 nummer pucko!');
//     } else if(typeof operator === 'string' && operator) {
//         switch(operator) {
//             case '+':
//                 console.log(add(num1, num2));
//                 break;
//             case '-':
//                 console.log(subtract(num1, num2));
//                 break;
//             case '/':
//                 console.log(divide(num1, num2));
//                 break;
//             case '*':
//                 console.log(multiply(num1, num2));
//                 break;
//             default:
//                 console.log('Du får bara ange godkända operatorer!');
//         }
//     } else {
//         console.log('Nu sket du allt i det blå skåpet');
//     }
// }

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// 7.

let playerScore = 0;
let compScore = 0;
let choices = ['rock', 'paper', 'scissors'];

while(!isGameOver()) {
    let playerHand = getPlayerHand();
    let compHand = getComputerHand();

    if(
        (playerHand === 'rock' && compHand === 'scissors')
        || (playerHand === 'paper' && compHand === 'rock')
        || (playerHand === 'scissors' && compHand === 'paper')
    ) {
        playerScore++;
    } else if(
        (playerHand === 'rock' && compHand === 'paper')
        || (playerHand === 'paper' && compHand === 'scissors')
        || (playerHand === 'scissors' && compHand === 'rock')
    ) {
        compScore++;
    }
    alert(`Användaren valde ${playerHand} mot datorns ${compHand}. Resultatet är nu: ${playerScore} - ${compScore}`);
}
if(playerScore === 3) {
    alert('Grattisn du vann!');
} else {
    alert('Du suger!');
}

function getPlayerHand() {
    let correctInput = false;
    while(!correctInput) {
        let playerHand = prompt('Ange rock, paper eller scissors');
        if(choices.includes(playerHand)) {
            correctInput = true;
            return playerHand;
        }
        else {
            alert('Du får bara ange godkända alternativ bitch');
        }
    }
}

function getComputerHand() {
    return choices[Math.floor(Math.random() * 3)];
}

function isGameOver() {
    return playerScore === 3 || compScore === 3;
}