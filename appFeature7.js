function game() {
  let secretNumber = 17;
  let playersList = {};
  let guessCount = playerList[user].length + 1;
  let guessLog = (playerList[user] = []);
  const user = prompt(`Enter your username`) || "player 1";

  // function play() {
  while (true) {
    const guess = prompt(`Guess a number ${user}.`);
    guessCount++;
    playerList[user] = guessCount.push(guess);

    if (guess === null) {
      alert(`Goodbye ${user}!`);
    }
    if (guess == secretNumber && guessCount > 1) {
      guessLog.pop();
      alert(
        `You are RIGHT!, it took you ${guessCount} tries.\nYour previous guesses were ${guessLog}.`
      );
      let replay = prompt(
        `${user} would you like to play again? 'Yes' or 'No'`
      );
      if (replay === "Yes") {
        play();
      } else {
        break;
      }
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
  // }
}

game();
