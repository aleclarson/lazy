
function lazy(obj, key, createValue) {
  var value;

  var getValue = function() {
    getValue = function() {
      return value;
    };
    return value = createValue();
  };

  Object.defineProperty(obj, key, {
    writable: false,
    enumerable: key[0] !== '_',
    configurable: true,
    get: function() {
      return getValue();
    }
  });
}

module.exports = lazy;
