(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    Game.addAsteroids.call(this);
  };

  Game.DIM_X = 1280;
  Game.DIM_Y = 720;
  Game.NUM_ASTEROIDS = 10;

  Game.randomPosition = function () {
    var x = Util.getRandomArbitrary((-1 * Game.DIM_X), Game.DIM_X);
    var y = Util.getRandomArbitrary((-1 * Game.DIM_Y), Game.DIM_Y);
    return [x, y];
  };

  Game.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid(Game.randomPosition));
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    this.asteroids.forEach(function (el) {
      el.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (el) {
      el.move();
    });
  };

})();
