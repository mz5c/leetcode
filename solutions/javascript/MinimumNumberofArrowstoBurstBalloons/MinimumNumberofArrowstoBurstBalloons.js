/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    var count = 0, arrow = null;
    points.sort((x, y) => x[1] == y[1] ? x[0] - y[0] : x[1] - y[1]);
    for (var i = 0; i < points.length; i++) {
        if (arrow != null && points[i][0] <= arrow) {
            continue;
        }
        arrow = points[i][1];
        count++;
    }
    return count;
};
