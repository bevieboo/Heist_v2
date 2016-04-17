// // Generate random number:
// while (gamePlay.levelArr.length < 5) {
//   var randomNum = Math.floor(Math.random()*99);
//   gamePlay.levelArr.push(randomNum);
// }
// console.log(gamePlay);

// Match each user input to combinations.
function checkForWin() {
  if (playerInput.length > 0) {
    for (var i = 0; i < playerInput.length; i++) {
      if (Number(playerInput[i]) === gamePlay.levelArr[i]) {
        winner = true;
        console.log(winner);
      } else {
        winner = false;
        console.log(winner);
      }
    }
  }
}
