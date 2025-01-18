function countBits(n: number): number[] {
    const dp = Array(n+1).fill(0);

    for (let i = 0 ; i < n+1 ; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
    }

    return dp;
};