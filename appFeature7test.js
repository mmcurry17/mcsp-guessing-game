function play(user) /* boolean */ {
  let secretNumber = Math.floor(Math.random() * 101);
  console.log(secretNumber);
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
      ).toLowerCase();
      if (replay === "yes" || replay === "y") {
        return true;
      } else {
        return false;
      }
    }
    if (guess == secretNumber && guessCount === 1) {
      alert(
        `You are RIGHT, you got it on the first try and hold the best possible score!`
      );
      if (!leaderboard[user]) {
        leaderboard[user] = guessCount;
      } else if (guessCount < leaderboard[user]) {
        leaderboard[user] = guessCount;
      }
    }
    if (guess < secretNumber && !isClose(guess, secretNumber && guess.length)) {
      alert(`Guess again ${user}, try a much LARGER number.`);
    }
    if (guess < secretNumber && isClose(guess, secretNumber)) {
      alert(`Guess again ${user}, try a slightly LARGER number.`);
    }
    if (guess > secretNumber && !isClose(guess, secretNumber)) {
      alert(`Guess again ${user}, try a much SMALLER number.`);
    }
    if (guess > secretNumber && isClose(guess, secretNumber)) {
      alert(`Guess again ${user}, try a slightly SMALLER number.`);
    }
  }
}

function leader() {
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

// check if new user prompt needs to display
// leaderboard: { [string: user]: bestGuessCount }
const leaderboard = {};
let user = null;
while (true) {
  if (!user) {
    user = prompt(`Enter your username`) || "player 1";
  }
  if (!play(user)) user = null;
}

function isClose(a, b) {
  const difference = Math.abs(a - b);
  if (difference < 10) {
    return true;
  } else {
    return false;
  }
}
