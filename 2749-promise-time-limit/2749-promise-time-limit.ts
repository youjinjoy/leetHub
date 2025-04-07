type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            const id = setTimeout(() => reject('Time Limit Exceeded'), t);

            // fn(...args)
            //     .then((result) => {
            //         clearTimeout(id);
            //         resolve(result)
            //     })
            //     .catch((error) => {
            //         clearTimeout(id);
            //         reject(error);
            //     })
            try {
                const result = await fn(...args);
                clearTimeout(id);
                resolve(result);
            }
            catch (error) {
                clearTimeout(id);
                reject(error)
            }
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */