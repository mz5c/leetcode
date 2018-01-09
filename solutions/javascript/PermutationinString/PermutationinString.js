/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    s1 = s1.split('').sort().join('');
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let tmp = s2.substr(i, s1.length).split('').sort().join('');
        if (tmp == s1) {
            return true;
        }
    }
    return false;
};
