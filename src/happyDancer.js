var HappyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
}

HappyDancer.prototype = Object.create(Dancer.prototype);
HappyDancer.prototype.constructor = HappyDancer.prototype;

HappyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  this.$node.toggle();
};