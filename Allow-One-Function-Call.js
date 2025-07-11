/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled = false;
  
  return function(...args) {  // args es un arreglo de argumentos
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);  // Pasa los argumentos desempaquetados a fn
    }
    return undefined;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
