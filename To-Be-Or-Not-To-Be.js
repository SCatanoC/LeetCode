/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
  return {
    toBe(expectedVal) {
      if (val !== expectedVal) 
      {throw new Error("Not Equal")
      }
      else
      {
      return true;
      }
    },
    notToBe(expectedVal) {
      if (val === expectedVal) throw new Error("Equal")
      else
      {
      return true;
      }
    }
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */