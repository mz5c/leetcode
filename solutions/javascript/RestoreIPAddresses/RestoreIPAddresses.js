/**
 * @param {string} s
 * @return {string[]} 
 */
var restoreIpAddresses = function(s) {
    var n = s.length;
    var res = [];
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
            for (var k = 1; k <= 3; k++) {
                if (i + j + k + 3 >= n && i + j + k + 1 <= n) {
                    var s1 = parseInt(s.substr(0, i));
                    var s2 = parseInt(s.substr(i, j));
                    var s3 = parseInt(s.substr(i + j, k));
                    var s4 = parseInt(s.substr(i + j + k));
                    if (s1.toString().length != i || s2.toString().length != j || s3.toString().length != k || s4.toString().length != n - i -j - k) {
                        continue;
                    }
                    if (s1 <= 255 && s2 <= 255 && s3 <= 255 && s4 <= 255) {
                        res.push(s1 + '.' + s2 + '.' + s3 + '.' + s4);
                    }
                }
            }
        }
    }
    return res;
};
