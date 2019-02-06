;(function(name, definition) {
  if (typeof module != 'undefined') {
    module.exports = definition();
  } else if (typeof define == 'function' && typeof define.amd == 'object') {
    define(name, [], definition);
  } else {
    this[name] = definition();
  }
}('toKilos', function() {
  /**
   * Format a numbers in thousands (K) or millions (M)
   * @param  {number} value The value to be formatted
   * @return {string}       The formatted value
   */
  return function(value) {
    if (value >= 1000000) {
      const ceilValue = Math.ceil(value/10000);
      return [ceilValue / 100, 'm'].join('');
    }
    if (value >= 1000) {
      const ceilValue = Math.ceil(value/10);
      return [ceilValue / 100, 'k'].join('');
    }
    return value;
  };
}));
