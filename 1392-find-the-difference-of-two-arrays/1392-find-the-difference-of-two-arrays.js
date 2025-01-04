/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);

    const answer=[[],[]];

    for (let n of setNums1) {
        if (!setNums2.has(n)) {
            answer[0].push(n);
        }
    }

    for (let n of setNums2) {
        if (!setNums1.has(n)) {
            answer[1].push(n);
        }
    }

    return answer;
};