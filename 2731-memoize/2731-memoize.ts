type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = new Map();
    let count = 0;
    
    return function(...args) {        

        const key = args.join(' ');

        if (cache.get(key) === undefined) {
            cache.set(key,fn(...args));
            count++;
        }
        return cache.get(key);
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