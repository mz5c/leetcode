var res = null;
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if (num == 0) {
        return ['0:00'];
    }
    let arr = Array(10).fill(0);
    res = [];
    xxx(arr, 0, num);
    return res;
};
var xxx = function(arr, idx, n) {
    for (let i = idx; i < 11 - n; i++) {
        let tmp = arr.slice();
        tmp[i] = 1;
        if (n == 1) {
            let ret = getret(tmp.slice());
            if (ret) {
                res.push(ret);
            }
        } else {
            xxx(tmp.slice(), i + 1, n - 1);
        }
    }
};
var getret = function(arr) {
    let a = parseInt(arr.slice(0, 4).join(''), 2);
    let b = parseInt(arr.slice(4).join(''), 2);
    if (a > 11 || b > 59) {
        return false;
    }
    return b > 9 ? a + ':' + b : a + ':0' + b;
};
