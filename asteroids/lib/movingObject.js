(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  Asteroids.MovingObject = function (input) {
    this.pos = input.pos;
    this.vel = input.vel;
    this.radius = input.radius;
    this.color = input.color;

  };

  Asteroids.MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };


  Asteroids.MovingObject.prototype.move = function () {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
  };
})();
