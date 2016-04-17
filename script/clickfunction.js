var boxes = document.querySelectorAll(".box");

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function(event) {
    if (this.id === 'backspace') {
      splitNumber = displayNumber.split('');
      popNumber = splitNumber.pop();
      displayNumber = splitNumber.join('');
      if (displayNumber.length === 0) {
        document.getElementById('display').innerHTML = 'Enter Number';
      } else {
        document.getElementById('display').innerHTML = displayNumber;
      }
    } else if (this.id === 'box-return') {
      playerInput.push(displayNumber);
      displayNumber = '';
      document.getElementById('display').innerHTML = 'Enter Number';
      console.log(playerInput);
    } else {
      displayNumber = displayNumber + this.innerHTML;
      document.getElementById('display').innerHTML = displayNumber;
      // console.log(displayNumber);
    }
    checkForWin();
  })
}
