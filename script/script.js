var gamePlay = {
  levelArr: [2, 4, 8, 9, 3],
  currentLevel: 1,
  playerName: '',
  playerInput: [],
}

window.onload = function() {
  var $dial = $('.dial');

  window.addEventListener('resize', resizeDial, false);

  function resizeDial(){
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // if the window is higher then it is wider
    if (windowHeight > windowWidth) {
      knobSize = Math.round(windowWidth*0.75);
      console.log(knobSize);
    // else if the window is wider then it is higher
    } else {
      knobSize = Math.round(windowHeight*0.75);
    }

    $dial.trigger('configure', {
      width: knobSize,
      height: knobSize
    });
  }

  // Initiate and draw dial:
  function initDial() {
    $(function() {
      $dial.knob({
        draw : function () {}
      });
    });
    resizeDial()
  }

  initDial();
}
