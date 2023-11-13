function play() {
  let secretNumber = 17;

  while (true) {
    const guess = prompt("Guess a number.");
    if (guess === null) {
      alert("Goodbye!");
      break;
    }
    if (guess == secretNumber) {
      alert("You are RIGHT!");
      break;
    }
  }
}

play();
