 //A Guessing game//
 
 let maximum = parseInt(prompt("enter the maximum number!"));
 while (!maximum) {
  maximum = parseInt(prompt("enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

//asking you now for a guess

let guess = parseInt(prompt("enter your first guess:"));
let attempts = 1;

while (guess !== targetNum) {
  if (guess === 'q') break;
  attempts++;
  if (guess > targetNum) {
      guess = parseInt(prompt("too high! enter a new guess:"));
  } else {
      guess = parseInt(prompt("too low! enter a new guess;"));
  }
}
if (guess === 'q') {
  console.log("Ok your win")
} else {
  console.log("congrats you won");
  console.log('you got it! it took you ${attempts} guesses')
}