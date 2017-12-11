/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                count++;
                xxx(grid, i, j);
            }
        }
    }
    return count;
};
var xxx = function(grid, i, j) {
    grid[i][j] = 2;
    if (i > 0 && grid[i - 1][j] == 1) {
        xxx(grid, i - 1, j);
    }
    if (j > 0 && grid[i][j - 1] == 1) {
        xxx(grid, i, j - 1);
    }
    if (i < grid.length - 1 && grid[i + 1][j] == 1) {
        xxx(grid, i + 1, j);
    }
    if (j < grid[0].length - 1 && grid[i][j + 1] == 1) {
        xxx(grid, i, j + 1);
    }
};
