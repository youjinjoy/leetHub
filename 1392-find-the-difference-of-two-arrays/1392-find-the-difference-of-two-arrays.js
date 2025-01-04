/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const mapNums1 = new Map();
    for (let i = 0 ; i < nums1.length ; i++) {
        const n  = mapNums1.get(nums1[i]);
        if (!n) {
            mapNums1.set(nums1[i],1);
        }
        else {
            mapNums1.set(nums1[i], n+1);
        }
    }

    const mapNums2 = new Map();
    for (let i = 0 ; i < nums2.length ; i++) {
        const n  = mapNums2.get(nums2[i]);
        if (!n) {
            mapNums2.set(nums2[i],1);
        }
        else {
            mapNums2.set(nums2[i], n+1);
        }
    }

    console.log(mapNums1, mapNums2);


    const answer1 = new Set();
    const answer2 = new Set();
    for (let i = 0 ; i < nums1.length ; i++) {
        if (!mapNums2.get(nums1[i])) {
            answer1.add(nums1[i]);
        }
    }
    
    for (let i = 0 ; i < nums2.length ; i++) {
        if (!mapNums1.get(nums2[i])) {
            answer2.add(nums2[i]);
        }
    }

    return [Array.from(answer1), Array.from(answer2)];
};