/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var a = [];
    var m = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (m.has(nums[i]) == true) {
            if (m.get(nums[i]) == 1) {
                m.set(nums[i], 2);
                a.splice(a.indexOf(nums[i]),1);
            }
        } else {
            m.set(nums[i], 1);
            a.push(nums[i]);
        }
    }
    return a.pop();
};