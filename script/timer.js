function beginTimer() {
  // This function starts the timer without a 3 second delay in the beginning.
  var i = 0;
  var numberFirst = gamePlay.levelArr[i];
  displayNumber(canvas.width, canvas.height, numberFirst, 'black')
  handleTimer();
}

function handleTimer() {
  var i = 1;
  var timer = setInterval(function() {

    var number = gamePlay.levelArr[i];

    // Every 3 seconds, display number from array.
    if (i < gamePlay.levelArr.length && gamePlay.levelArr[i]!=undefined) {
      drawCircle(canvas.width, canvas.height, 0.5, '#EC5689');
      displayNumber(canvas.width, canvas.height, number, 'black');
    }
    i += 1;

    // Stop timer:
    if (i > gamePlay.levelArr.length) {
      clearInterval(timer);
      number = '';
      displayNumber(canvas.width, canvas.height, number, 'black');
      drawCircle(canvas.width, canvas.height, 0.5, '#EC5689');
      console.log(number);
      displayNumber(canvas.width, canvas.height, 'GO', 'black');
    }

  }, 2000); // Function is running every 3 seconds.
}
