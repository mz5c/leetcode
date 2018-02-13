/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var i = 10;
    var a = n + '';
    while (i > 0) {
        a = a.split('').map((x)=>parseInt(x)*parseInt(x)).reduce((x,y)=>x+y) + '';
        if (a == '1') {
            return true;
        }
        i--;
    }
    return false;
};
