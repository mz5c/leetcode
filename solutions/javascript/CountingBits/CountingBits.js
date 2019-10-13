/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var res = [0];
    for (var i = 1; i <= num; i++) {
        res.push(hammingWeight(i));
    }
    return res;
};
var hammingWeight = function(n) {
    var count = 0;
    while (n) {
        n &= n - 1;
        count++;
    }
    return count;
};