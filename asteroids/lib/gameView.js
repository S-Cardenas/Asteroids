(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var GameView = Asteroids.GameView = function (game, ctx) {
    this.Game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var fn = this;
    setInterval(function () {
      fn.Game.moveObjects();
      fn.Game.draw(fn.ctx);
    }, 20);
  };

})();
