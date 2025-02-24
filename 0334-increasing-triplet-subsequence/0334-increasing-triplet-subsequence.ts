function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;

    let firstSmall = Infinity;
    let secondSmall = Infinity;
    for (let i = 0 ; i < nums.length ; i++) {
        if (nums[i] > secondSmall) {
            return true;
        }

        if (nums[i] <= firstSmall) {
            firstSmall = nums[i];
        }
        else if (nums[i] < secondSmall) {
            secondSmall = nums[i];
        }

    }

    return false;

};
