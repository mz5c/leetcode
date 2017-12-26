/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let count = 0, m = new Map(), res = [];
    for (let i = 0; i < strs.length; i++) {
        let tmp = strs[i].split('').sort().join('');
        if (m.get(tmp) === undefined) {
            res[count] = [];
            res[count].push(strs[i]);
            m.set(tmp, count);
            count++;
        } else {
            res[m.get(tmp)].push(strs[i]);
        }
    }
    return res;
};
