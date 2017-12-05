/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let s1 = new Set(), s2 = new Set(), s3 = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                let k = parseInt(i / 3) * 3 + parseInt(j / 3);
                if (s1.has(i + '_' + board[i][j]) || s2.has(j + '_' + board[i][j]) || s3.has(k + '_' + board[i][j])) {
                    return false;
                }
                s1.add(i + '_' + board[i][j]);
                s2.add(j + '_' + board[i][j]);
                s3.add(k + '_' + board[i][j]);
            }
        }
    }
    return true;
};
