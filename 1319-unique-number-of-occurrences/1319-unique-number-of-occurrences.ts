function uniqueOccurrences(arr: number[]): boolean {
    const D = new Map();
    for (let i = 0 ; i < arr.length ; i++) {
        const value = D.get(arr[i]);
        if (!value) {
            D.set(arr[i], 1);
        }
        else {
            D.set(arr[i], value+1);
        }
    }
    
    return D.size === new Set(D.values()).size;
};