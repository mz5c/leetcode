/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var a = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    var arr = s.split('');
    var res = 0;
    for (var i=0; i<arr.length; i++) {
        if (i<arr.length-1 && a[arr[i]] < a[arr[i+1]]) {
            res -= a[arr[i]];
        } else {
            res += a[arr[i]];
        }
    }
    return res;
};
