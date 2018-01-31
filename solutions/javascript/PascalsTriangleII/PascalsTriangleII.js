/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    rowIndex++;
    if (rowIndex < 1) {
        return [];
    } else if (rowIndex === 1) {
        return [1];
    } else {
        let res = [1];
        for (let i = 2; i <= rowIndex; i++) {
            let tmp1 = 1, tmp2 = 0;
            for (let j = 1; j < i - 1; j++) {
                tmp2 = res[j] + tmp1;
                tmp1 = res[j];
                res[j] = tmp2;
            }
            res.push(1);
        }
        return res;
    }
};
