function longestSubarray(nums: number[]): number {
    let left = 0;

    let zeros = 0;

    let maxOnes = 0;

    for (let right = 0 ; right < nums.length ; right++) {
        if (nums[right] === 0) {
            zeros += 1;
        }

        while (zeros > 1) {
            if (nums[left] === 0) {
                zeros -= 1;
            }
            left += 1;
        }

        maxOnes = Math.max(maxOnes, right - left);
    }

    return maxOnes;
};