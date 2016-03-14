(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var Asteroid = Asteroids.Asteroid = function (pos) {
    var vel = Asteroids.Util.randomVec(this.SPEED);
    Asteroids.MovingObject.call(this, {pos: pos, vel: vel, radius: this.RADIUS, color: this.COLOR});
  };

  Asteroid.RADIUS = 5;
  Asteroid.COLOR = "#00FFFF";
  Asteroid.SPEED = 10;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
