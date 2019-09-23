/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toUpperCase().replace(/([^A-Z0-9]*)/g,"");
    if (s.length == 0) {
        return true;
    } else {
        var i = 0, j = s.length - 1;
        while (i <= j) {
            if (s[i] != s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
};