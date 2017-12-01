/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) {
        return 0;
    }
    let n = nums.length, max = Math.max(...nums), min = Math.min(...nums), gap = Math.ceil((max - min) / (n - 1));
    let maxBuckets = Array(n - 1).fill(-Infinity), minBuckets = Array(n - 1).fill(Infinity);
    nums.forEach(num => {
        if (num === max) {
            return;
        }
        let idx = parseInt((num - min) / gap);
        maxBuckets[idx] = Math.max(maxBuckets[idx], num);
        minBuckets[idx] = Math.min(minBuckets[idx], num);
    });
    let maxGap = 0, prev = min;
    for (let i = 0; i < n - 1; i++) {
        if (minBuckets[i] === Infinity) {
            continue;
        }
        maxGap = Math.max(maxGap, minBuckets[i] - prev);
        prev = maxBuckets[i];
    }
    return Math.max(maxGap, max - prev);
};
