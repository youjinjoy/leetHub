function productExceptSelf(nums: number[]): number[] {
    const N = nums.length;
    let leftProduct = 1;
    let rightProduct = 1;
    const result = Array(N).fill(1);

    for (let i = 0 ; i < N ; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    console.log("L",result);

    for (let i = N-1 ; i >= 0 ; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    console.log("R",result);

    return result;
};