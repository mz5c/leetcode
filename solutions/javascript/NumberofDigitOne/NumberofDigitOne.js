/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    if (n <= 0) {
        return 0;
    }
    var count = 0, a = 0, b = 0, c = 0;
    for (var i = 1; i <= n; i *= 10) {
        a = parseInt(n / (i * 10));
        b = parseInt(n / i) % 10;
        c = n % i;
        if (b == 0) {
            count += a * i;
        } else if (b == 1) {
            count += a * i + c + 1;
        } else {
            count += (a + 1) * i;
        }
    }
    return count;
};