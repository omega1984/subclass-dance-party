var SadDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
}

SadDancer.prototype = Object.create(Dancer.prototype);
SadDancer.prototype.constructor = SadDancer.prototype;

SadDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  this.$node.toggle();
};
