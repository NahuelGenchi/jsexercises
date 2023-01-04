/*
Write a JavaScript program where the program takes a random integer
between 1 to 10, the user is then prompted to input a guess number.

If the user input matches with guess number, the program will display
a message "Good Work" otherwise display a message "Not matched".
*/

const guessNumberGame = () => {
  const getRandomNumber = Math.floor(Math.random() * 10) + 1;
  const userNumber = Number(prompt("Choose a number between 1 to 10"));
  console.log(`Guess number is ${getRandomNumber} and your number is ${userNumber}`);

  if (getRandomNumber === userNumber) {
    console.log("Good Work.");
  } else {
    console.log("Not matched")
  };
};

export const myFunction = () => {
  guessNumberGame();
};