/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows < 1) {
        return [];
    } else if (numRows === 1) {
        return [[1]];
    } else {
        let res = [[1]];
        for (let i = 2; i <= numRows; i++) {
            let tmp = [1];
            for (let j = 1; j < i - 1; j++) {
                tmp[j] = res[i - 2][j - 1] + res[i - 2][j];
            }
            tmp.push(1);
            res.push(tmp);
        }
        return res;
    }
};
