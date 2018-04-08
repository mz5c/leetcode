/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    let map = new Map();
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (t[i] != map.get(s[i])) {
                return false;
            }
        } else {
            map.set(s[i], t[i]);
        }
        set.add(t[i]);
    }
    return map.size == set.size;
};
