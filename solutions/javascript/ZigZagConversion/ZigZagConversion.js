/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const num = numRows + numRows - 2;
    const result = Array(numRows).fill('');
    [...s].forEach((char, idx) => {
        let _idx = idx % num;
        _idx = _idx < numRows ? _idx : num - _idx;
        result[_idx] += char;
    });
    return result.join('');
};
