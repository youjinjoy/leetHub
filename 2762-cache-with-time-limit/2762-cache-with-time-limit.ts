class TimeLimitedCache {
    private cache;
    
    constructor() {
        this.cache = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const result = this.cache.get(key);
        if(!result) {
            
            const timerId = setTimeout(()=>{
                this.cache.delete(key);
            }, duration);

            this.cache.set(key, [timerId, value]);
            return false;
        }

        const [prevId, prevValue] = result;
        
        clearTimeout(prevId);

        const timerId = setTimeout(()=>{
            this.cache.delete(key);
        }, duration);

        this.cache.set(key,[timerId, value]);
        
        return true;
    }
    
    get(key: number): number {
        const result = this.cache.get(key);
        if (!result) {
            return -1;
        }
        
        return result[1];
    }
    
    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */