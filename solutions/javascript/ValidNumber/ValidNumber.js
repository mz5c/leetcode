/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.replace(/(^\s*)|(\s*$)/g, '');
    if (s.replace(/e|(\d*)/g, '').replace(/\./g, '').replace(/\-/g, '').replace(/\+/g, '') == '' && !isNaN(parseFloat(s))) {
        s = s.replace(/^\+/g, '').replace(/^\-/g, '');
        if (s.replace(/\d*/g, '').replace(/\./g, '').replace(/\-/g, '').replace(/\+/g, '').length > 1) {
            return false;
        }
        if (s.replace(/e|(\d*)/g, '').replace(/\-/g, '').replace(/\+/g, '').length > 1) {
            return false;
        }
        if (s.replace(/e|(\d*)/g, '').replace(/\./g, '').replace(/\+/g, '').length > 1) {
            return false;
        }
        if (s.replace(/e|(\d*)/g, '').replace(/\./g, '').replace(/\-/g, '').length > 1) {
            return false;
        }
        if (s.indexOf('+') > 0 && (s.indexOf('+') - s.indexOf('e') > 1 || s.indexOf('+') - s.indexOf('e') < 0)) {
            return false;
        }
        if (s.indexOf('-') > 0 && (s.indexOf('-') - s.indexOf('e') > 1 || s.indexOf('-') - s.indexOf('e') < 0)) {
            return false;
        }
        if (s.indexOf('+') == s.length - 1 || s.indexOf('-') == s.length - 1 || s.indexOf('e') == s.length - 1) {
            return false;
        }
        if (s.indexOf('e') != -1 && s.indexOf('.') > s.indexOf('e')) {
            return false;
        }
        return true;
    }
    return false;
};
