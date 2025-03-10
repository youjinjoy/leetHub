function maxOperations(nums: number[], k: number): number {
    let left = 0;
    let right = nums.length;

    nums.sort((a,b)=>a-b);

    let total = 0;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
            total += 1;
            left += 1;
            right -= 1;
        }
        else if (sum < k) {
            left += 1;
        }
        else { // sum > k
            right -= 1;
        }
    }

    return total;
};