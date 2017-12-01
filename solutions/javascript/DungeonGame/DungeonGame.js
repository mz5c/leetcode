/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length, n = dungeon[0].length, hp = [];
    for (let i = m - 1; i >= 0; i--) {
        hp[i] = []
        for (let j = n - 1; j >= 0; j--) {
            if (i == m - 1 && j == n - 1) {
                hp[i][j] = Math.max(1, 1 - dungeon[i][j]);
            } else if (i == m - 1) {
                hp[i][j] = Math.max(1, hp[i][j + 1] - dungeon[i][j]);
            } else if (j == n - 1) {
                hp[i][j] = Math.max(1, hp[i + 1][j] - dungeon[i][j]);
            } else {
                hp[i][j] = Math.max(1, Math.min(hp[i][j + 1], hp[i + 1][j]) - dungeon[i][j]);
            }
        }
    }
    return hp[0][0];
};
