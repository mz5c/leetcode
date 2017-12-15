/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s == '' || numRows < 2) {
        return s;
    }
    var a = [];
    var x = parseInt((numRows + 1) /2) - 1;
    for (var i = 0; i < numRows; i++) {
        a[i] = [];
    }
    for (var j = 0; j < s.length;) {
        var idx = 0;
        for (idx = 0; idx < numRows && j < s.length;) {a[idx++].push(s[j++]);}
        for (idx = numRows - 2; idx > 0 && j < s.length;) {a[idx--].push(s[j++]);}
    }
    var str = '';
    for (var k = 0; k < a.length; k++) {
        str += a[k].join('');
    }
    return str;
};
