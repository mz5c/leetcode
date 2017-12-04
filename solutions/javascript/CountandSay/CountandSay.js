/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var a = '1';
    var i = 1;
    var res = a;
    while (i < n) {
        res = '';
        for (var j = 0; j < a.length; j++) {
            var x = a[j];
            var count = 1;
            while (j + count < a.length && a[j + count] == a[j]) {
                count++;
            }
            res += count + a[j];
            j += count - 1;
        }
        i++;
        a = res;
    }
    return res;
};
