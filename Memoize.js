/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const check = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in check){
            return check[key];
        }
        const result = fn(...args);
        check[key] = result;
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */