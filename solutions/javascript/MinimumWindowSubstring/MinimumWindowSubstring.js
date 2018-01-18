/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length || s.length === 0 || t.length === 0) {
        return '';
    } else if (t.length === 1 && s.indexOf(t) !== -1) {
        return t;
    }
    let i = 0, j = 0, m = new Map(), res = s + 'x';
    for (i = 0; i < t.length; i++) {
        m.set(t[i],m.has(t[i]) ? m.get(t[i]) + 1 : 1);
    }
    for (i = 0; i < s.length - t.length + 1; i++) {
        if (t.indexOf(s[i]) !== -1) {
            let tmp = new Map(m);
            tmp.get(s[i]) === 1 ? tmp.delete(s[i]) : tmp.set(s[i], tmp.get(s[i]) - 1);
            for (j = i + 1; j < s.length; j++) {
                if (tmp.has(s[j])) {
                    tmp.get(s[j]) === 1 ? tmp.delete(s[j]) : tmp.set(s[j], tmp.get(s[j]) - 1);
                    if (tmp.size === 0) {
                        res = res.length > j - i + 1 ? s.substr(i, j - i + 1) : res;
                    }
                }
            }
        }
    }
    return res === s + 'x' ? '' : res;
};
