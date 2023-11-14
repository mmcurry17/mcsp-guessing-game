function play(user) /* boolean */ {
  let secretNumber = 17;
  let guessCount = 0;
  let guessLog = [];

  while (true) {
    const guess = prompt(`Guess a number ${user}.`);
    guessCount++;
    guessLog.push(guess);

    if (guess === null) {
      alert(`Goodbye ${user}!`);
    }
    if (guess == secretNumber && guessCount > 1) {
      guessLog.pop();
      alert(
        `You are RIGHT!, it took you ${guessCount} tries.\nYour previous guesses were ${guessLog}.`
      );
      if (!leaderboard[user]) {
        leaderboard[user] = guessCount;
      } else if (guessCount < leaderboard[user]) {
        leaderboard[user] = guessCount;
      }
      const winner = leader();
      let replay = prompt(
        `The current leader is ${winner[0]} with ${winner[1]} guesses.\n${user} would you like to play again? 'Yes' or 'No'`
      );
      if (replay === "Yes") {
        return true;
      } else {
        return false;
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
}

function leader() {
  console.log("trying to find winner");
  let winner = null;
  for (const name in leaderboard) {
    const highScore = leaderboard[name];
    if (winner === null || winner[1] > highScore) {
      winner = [name, highScore];
    }
  }
  if (!winner) {
    winner = ["nobody", 999];
  }
  return winner;
}

// leaderboard: { [string: user]: bestGuessCount }
const leaderboard = {};
let user = null;
while (true) {
  if (!user) {
    user = prompt(`Enter your username`) || "player 1";
  }
  if (!play(user)) user = null;
}

/*
if (replay === "Yes") {
  play();
} else {
  break;
}
*/
