function productExceptSelf(nums: number[]): number[] {
    // 0이 2개 이상 있으면 Output은 전부 0
    // 0이 1개 있으면 Output은 0 제외 전부 0
    // 0이 없으면 Output

    let productAll = 1;
    let zeros = 0;
    let zeroIndex= -1;
    for (let i = 0 ; i < nums.length ; i++) {
        if (zeros > 1) break;

        if (nums[i] === 0) {
            zeros += 1;
            zeroIndex = i;
        }
        else {
            productAll *= nums[i];
        }
    }

    if (zeros > 1) {
        return Array(nums.length).fill(0);
    }
    
    if (zeros > 0) {
        return nums.map((num,index) => {
            if (index === zeroIndex) {
                return productAll;
            }

            return 0;
        })
    }

    return nums.map((num) => productAll/num);
};