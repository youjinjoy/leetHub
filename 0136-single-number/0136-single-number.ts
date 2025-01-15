function singleNumber(nums: number[]): number {
    let answer = 0;
    for (let num of nums) {
        answer ^= num;
    }
    return answer;
};