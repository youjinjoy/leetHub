/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0;
    let end = k-1;
    let current = 0;
    for (let i = 0 ; i < k ; i++) {
        current += nums[i];
    }

    let result = current;
    const n = nums.length;

    while(end < n-1) {
        current = current-nums[start]+nums[end+1];
        result = Math.max(result, current);
        start++;
        end++;
    }

    return result/k;
};