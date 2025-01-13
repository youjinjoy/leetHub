function tribonacci(n: number): number {
    const T = n >= 4 ? Array(n+1).fill(0) : Array(4).fill(0);
    T[1] = 1;
    T[2] = 1;
    T[3] = 2;

    for (let i = 4 ; i <= n ; i++) {
        T[i] = T[i-1] + T[i-2] + T[i-3];
    }

    return T[n];
};