export function is(value) {
  /**
   * @function is() is a helper function to check the type of the value given.
   * @argument {Any} value value of any type.
   * @returns {Object} object containing a function to check the value for that type.
   */
  return {
    a: function (check) {
      if (check.prototype) check = check.prototype.constructor.name;

      let type = Object.prototype.toString
        .call(value)
        .slice(8, -1)
        .toLowerCase();

      return value != null && type === check.toLowerCase();
    }
  };
}
