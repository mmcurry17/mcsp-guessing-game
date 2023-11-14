function play() {
  let secretNumber = 17;
  let guessCount = 0;
  let guessLog = [];
  const user = prompt(`Enter your username`);

  while (true) {
    const guess = prompt(`Guess a number ${user}.`);
    guessCounter++;
    guessLogger.push(guess);

    if (guess === null) {
      alert(`Goodbye ${user}!`);
      break;
    }
    if (guess == secretNumber && guessCount > 1) {
      guessLogger.pop();
      alert(
        `You are RIGHT!, it took you ${guessCount} tries.\nYour previous guesses were ${guessLog}.`
      );
      break;
    }
    if (guess == secretNumber && guessCount === 1) {
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
