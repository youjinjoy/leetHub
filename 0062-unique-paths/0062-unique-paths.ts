function uniquePaths(m: number, n: number): number {
    // dp[i][j]: (i,j) 위치까지 오는 경로의 수
    const dp = Array.from({ length: m }, () => Array(n).fill(1));

    for (let i = 1 ; i < m ; i++) {
        for (let j = 1 ; j < n ; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[m-1][n-1];
};