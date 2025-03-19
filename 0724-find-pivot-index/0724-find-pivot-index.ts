function pivotIndex(nums: number[]): number {
    const prefixSum = Array(nums.length+1).fill(0);
    for (let i = 0 ; i < nums.length ; i++) {
        prefixSum[i+1] = prefixSum[i] + nums[i];
    }

    const pl = prefixSum.length;
    for (let pi = 0 ; pi < pl ; pi++) {
        if (prefixSum[pi] === prefixSum[pl - 1] - prefixSum[pi+1]) {
            return pi;
        }
    }
    return -1;
};