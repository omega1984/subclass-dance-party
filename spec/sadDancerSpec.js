describe('sadDancer', function () {

  var sadDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    sadDancer = new SadDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(sadDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(sadDancer.$node, 'toggle');
    sadDancer.step();
    expect(sadDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(sadDancer, 'step');
      expect(sadDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(sadDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(sadDancer.step.callCount).to.be.equal(2);
    });
  });
});
