var res = [];
var pad_arr = function (n, c) {
    var pa = [];
    for (var i = 0; i < n; i++) {
        pa[i] = c;
    }
    return pa;
};
var getInitArr = function (n) {
    var gia = [];
    for (var i = 0; i < n; i++) {
        gia[i] = pad_arr(n, '.');
    }
    return gia;
};
var isValid = function (arr, x, y, n) {
    var i = x - 1;
    var j = y - 1;
    while (i >= 0 && j >= 0) {
        if (arr[i][j] == 'Q') {
            return false;
        }
        i -= 1;
        j -= 1;
    }
    i = x - 1;
    j = y;
    while (i >= 0) {
        if (arr[i][j] == 'Q') {
            return false;
        }
        i -= 1;
    }
    i = x - 1;
    j = y + 1;
    while (i >= 0 && j < n) {
        if (arr[i][j] == 'Q') {
            return false;
        }
        i -= 1;
        j += 1;
    }
    return true;
};
var nq = function (arr, idx, n) {
    arr = arr.slice();
    if (idx == n) {
        res.push(arr.map((x)=>x.join('')));
        return;
    }
    for (var i = 0; i < n; i++) {
        arr[idx] = pad_arr(n, '.');
        arr[idx][i] = 'Q';
        if (idx == 0) {
            nq(arr, idx + 1, n);
        } else if (isValid(arr.slice(), idx, i, n)) {
            nq(arr, idx + 1, n);
        }
    }
};
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    res = [];
    if (n == 1) {
        return [["Q"]];
    } else if (n < 4) {
        return [];
    } else {
        var arr = getInitArr(n);
        nq(arr.slice(), 0, n);
    }
    return res;
};
