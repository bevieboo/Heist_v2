// Filling canvas.
function fillCanvas(width, height, colour) {
  c.fillStyle = colour;
  c.fillRect(0, 0, width, height);
}

// Draw circle.
function drawCircle(width, height, radiusPercent, colour) {
  // Radius to be responsive to window's height:
  var radius = (canvas.height/2) * radiusPercent
  c.fillStyle = colour;
  c.beginPath();
  c.arc(width/2, height/2, radius, 0, Math.PI*2, true);
  c.fill();
}

// Display number on screen.
function displayNumber(posX, posY, number, color) {
  c.fillStyle = color;
  c.font = "100px Helvetica bold"; // font size to be refactored.
  c.textAlign = "center";
  c.fillText(number, posX/2, posY/2+20);
}

// Draw segments to display wins.
function displayWins(radiusPercent) {
  var radius = (canvas.height/2) * radiusPercent
  var startAngle = 0;
  var endAngle = 360 / gamePlay.levelArr.length;
  c.fillStyle = 'black';
  c.beginPath();
  c.moveTo(canvas.width/2, canvas.height/2);
  c.arc(canvas.width/2, canvas.height/2, radius, startAngle, (endAngle * (Math.PI / 180)), false);
  c.fill();
}
