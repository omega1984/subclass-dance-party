var Dancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // this is the blinking node that is planted in html
  this.$node = $('<img class="dancer">');
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

// set blinking nodes position
// top, left is equvalent to cols and rows
Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


