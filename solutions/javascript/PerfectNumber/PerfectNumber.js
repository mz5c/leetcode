/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var n = 1;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            n += i;
            if (num / i !== i) {
                n += num / i;
            }
        }
    }
    return n === num && n > 1 ? true : false;
};