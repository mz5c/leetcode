/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    while (n) {
        n &= n - 1;
        count++;
    }
    return count;
};

//other solution
var hammingWeight = function(n) {
    return (n).toString(2).replace(/0/g, '').length;
};
