(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {

    var Surrogate = function () {};

    Surrogate.prototype = ParentClass.prototype;

    ChildClass.prototype = new Surrogate();

    ChildClass.prototype.constructor = ChildClass;
  };


  Util.randomVec = function(length) {
    var x = Util.getRandomArbitrary((-1 * length), length);
    var y = Math.sqrt((Math.pow(length, 2) - (Math.pow(x, 2))));
    return [x, y];
  };

  Util.getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
  };

})();
