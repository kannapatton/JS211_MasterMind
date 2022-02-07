'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = () =>  {
  //if letter is correct
  // if letter is correct and in correct location, true
  //if letter is incorrect and in wrong location, false
  // your code here
 let arrayAnswer= solution.split('');
 let arrayGuess= guess.split('');
 
 //trim to lowercase?
  let rightPlace = 0
  let rightLetter = 0
  // for loop that needs to loop through each index of solution and compare to guess
  for (let i=0; i<arrayAnswer.length; i++) {
    if (arrayAnswer[i] == arrayGuess[i]) {
      rightPlace++
      arrayAnswer[i]=null;
      arrayGuess[i]=null;
    } 

  }
  for (let i=0; i<arrayAnswer.length; i++){
    //search arrayAnswer and compare to arrayGuess 
    // variable 
    let findIndex = arrayAnswer.indexof(arrayGuess[i])
    if (findIndex>=0){rightLetter++ 
      arrayAnswer[i]=null;
      arrayGuess[i]=null;
      //do the next point system right letter and after for loop line 57 return string  
    }
  }
  console.log(`you guessed ${arrayGuess} here's how many were in the correct location ${rightPlace} and here's how many letters were correct
  ${rightLetter}`);
  return (`${rightPlace} - ${rightLetter}`);
  // separate loops that check is it in rightplace and rightLetter
  // return points (string format 1-3 rightPlace-rightLetter)

}

const mastermind = (guess) => {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  // check user guess is it correct? must compared to answer
  //console.log ('you won!');
  // else if generate hint
  // check if guess is correct? compare to answer
  // repeat above until  won
  if (solution !== guess){ generateHint();} 
  else{
  board.push(guess);}
  if (solution == guess)
  console.log('You guessed it!')
  return ('You guessed it!');
  
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}


// // Spec 0 - Define a test solution: Helpful suggestion: while developing you can set a default solution for you to test against. 
// At the top of mastermind(), simply set const solution = 'abcd'; as a global variable.

// // Spec 1 - Detect a correct solution: In mastermind(), if the guess you passed in equals the solution,
//  return 'You guessed it!'; Spec 2 - Generate a hint: generateHint() should take one argument, guess.

// // Spec 2.1 - Split up the solution and guess: In generateHint(), create variables solutionArray and guessArray 
// that each split up passed in arguments, 
// [.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/splitting on '' (empty string).

// Spec 2.2 - Determine correct "letter-locations": Create a variable correctLetterLocations and set it to 0. 
// This variable will record how many correct "letter-locations" were guessed. For instance, a guess of aabc against a solution
//  of deba would yield one correct "letter-location" (b). In a for loop, iterate over the solutionArray, comparing each 
//  index of solutionArray against the same index of guessArray. If the item matches, increment correctLetterLocations, 
//  and set that index in solutionArray to null.

// // Spec 2.3 - Determine correct "letters": Now that we have nulled the already counted correctLetterLocations, 
// we can see if the guessArray contains any correctLetters that were not in the correct location. 
// Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray. 
// Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray. 
// Save that index in a variable called targetIndex. Now, if targetIndex is greater than -1(it exists in the array), 
// increment correctLetters and set the item in solutionArray at that index equal to null.

// // Spec 2.4 - return hint string: Optionally, you can use the colors package, 
// return a string that prints out the hints you generated, with correctLetterLocations being red,
//  correctLetters being white, and separated by a hyphen. > (NOTE: If you choose to use this color package, 
//   only console.log the result. If you return the result your program will fail the tests.)

// // Spec 3 - Add guess and hint to the board: Define a variable called hint that collects the returned value 
// of generateHint(guess). .push the guess and the hint (as a combined string) into the board.

// // Spec 4 - End the game: After 10 incorrect guesses, if the board length equals 10, return 
// 'You ran out of turns! The solution was' and the solution. Otherwise, return 'Guess again.'.