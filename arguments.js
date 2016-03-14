function sum() {
  var args = [].slice.call(arguments);
  var sums = 0;
  args.forEach( function (el) {
    sums += el;
  });

  return sums;
}

Function.prototype.myBind = function (obj) {
  var bindArgs = [].slice.call(arguments, 1);
  var fn = this;

  return function() {
    var callArgs = [].slice.call(arguments);
    var args = callArgs.concat(bindArgs);
    return fn.apply(obj, args);
  };
};

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      var sum = 0;
      numbers.forEach(function (el) {
        sum += el;
      });

      return sum;
    }
    else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  var objects = [];
  var fn = this;

  function _curry(object) {
    objects.push(object);

    if (objects.length === numArgs) {
      return fn.apply(null, objects);
    }
    else {
      return _curry;
    }
  }

  return _curry;
};
