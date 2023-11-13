function play() {
  let secretNumber = 17;
  let guessCounter = 0;
  let guessLogger = [];
  const user = prompt(`Enter your username`);

  while (true) {
    const guess = prompt(`Guess a number ${user}.`);
    guessCounter++;
    guessLogger.push(guess);

    if (guess === null) {
      alert(`Goodbye ${user}!`);
      break;
    }
    if (guess == secretNumber && guessCounter > 1) {
      guessLogger.pop();
      alert(
        `You are RIGHT!, it took you ${guessCounter} tries.\nYour previous guesses were ${guessLogger}.`
      );
      break;
    }
    if (guess == secretNumber && guessCounter === 1) {
      alert(`You are RIGHT, you got it on the first try!`);
      break;
    }
    if (guess < secretNumber && guess.length) {
      alert(`Guess again ${user}, try a LARGER number.`);
    }
    if (guess > secretNumber) {
      alert(`Guess again ${user}, try a SMALLER number.`);
    }
  }
}

play();
