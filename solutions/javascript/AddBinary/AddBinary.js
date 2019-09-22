/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var res = [], i = 0, j = 0, tmp = 0;
    while (true) {
        if (i < a.length) {
            if (i < b.length) {
                tmp = parseInt(a[a.length - 1 - i]) + parseInt(b[b.length - 1 - i]) +j;
                res[i] = tmp % 2;
                j = tmp > 1 ? 1 : 0;
                i++;
            } else if (j == 1) {
                res[i] = a[a.length - 1 - i] == '1' ? 0 : 1;
                j = a[a.length - 1 - i] == '1' ? 1 : 0;
                i++;
            } else {
                res[i] = parseInt(a[a.length - 1 - i]);
                i++;
            }
        } else if (i < b.length) {
            if (j == 1) {
                res[i] = b[b.length - 1 - i] == '1' ? 0 : 1;
                j = b[b.length - 1 - i] == '1' ? 1 : 0;
                i++;
            } else {
                res[i] = parseInt(b[b.length - 1 - i]);
                i++;
            }
        } else {
            break;
        }
    }
    return j ? j + res.reverse().join('') : res.reverse().join('');
};