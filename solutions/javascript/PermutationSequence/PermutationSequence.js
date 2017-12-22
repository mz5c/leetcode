/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let num = [], fact = [1], res = '';
    for (let i = 1; i <=n; i++) {
        num.push(i);
        fact[i] = fact[i - 1] * i;
    }
    k--;
    for (let i = n; i > 0; i--) {
        let ind = Math.floor(k / fact[i - 1]);
        k %= fact[i - 1];
        res += num[ind];
        num.splice(ind, 1);
    }
    return res;
};
