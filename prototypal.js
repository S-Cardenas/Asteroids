Function.prototype.inherits = function (superClass) {

  var Surrogate = function () {};

  Surrogate.prototype = superClass.prototype;

  this.prototype = new Surrogate();

  this.prototype.constructor = this;
};


function MovingObject () {
}


MovingObject.prototype.funct = function() {
  console.log("Helloooo");
};

MovingObject.prototype.attr = "Our Attribute";

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
