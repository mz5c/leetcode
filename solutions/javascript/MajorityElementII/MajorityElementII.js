/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let m = new Map(), res = [];
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) {
            m.set(nums[i], m.get(nums[i]) + 1);
        } else {
            m.set(nums[i], 1);
        }
    }
    for (var j of m) {
        if (j[1] > Math.floor(nums.length / 3)) {
            res.push(j[0]);
        }
    }
    return res;
};
