/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (word.length === 0) {
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (word.length === 1) {
                    return true;
                }
                if (xxx(JSON.parse(JSON.stringify(board)), i, j, word, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};
var xxx = function(board, r, c, word, idx) {
    board[r][c] = 'used';
    if (idx === word.length - 1) {
        return true;
    }
    if (r > 0 && board[r - 1][c] === word[idx + 1] && xxx(JSON.parse(JSON.stringify(board)), r - 1, c, word, idx + 1)) {
        return true;
    }
    if (c < board[0].length - 1 && board[r][c + 1] === word[idx + 1] && xxx(JSON.parse(JSON.stringify(board)), r, c + 1, word, idx + 1)) {
        return true;
    }
    if (r < board.length - 1 && board[r + 1][c] === word[idx + 1] && xxx(JSON.parse(JSON.stringify(board)), r + 1, c, word, idx + 1)) {
        return true;
    }
    if (c > 0 && board[r][c - 1] === word[idx + 1] && xxx(JSON.parse(JSON.stringify(board)), r, c - 1, word, idx + 1)) {
        return true;
    }
    return false;
};
