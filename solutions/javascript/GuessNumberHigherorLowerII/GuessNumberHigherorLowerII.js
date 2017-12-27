/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    let table = [];
    for (let i = 0; i <= n; i++) {
        table[i] = Array(n + 1).fill(0);
    }
    return xxx(table, 1, n);
};
var xxx = function(t, s, e) {
    if (s >= e) {
        return 0;
    }
    if (t[s][e] !== 0) {
        return t[s][e];
    }
    let res = Infinity;
    for (let x = s; x <= e; x++) {
        let tmp = x + Math.max(xxx(t, s, x - 1), xxx(t, x + 1, e));
        res = Math.min(res, tmp);
    }
    t[s][e] = res;
    return res;
};
