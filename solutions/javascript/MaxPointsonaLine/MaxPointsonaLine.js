/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let n = points.length;
    if (n < 3) {
        return n;
    }
    let res = 0;
    for (let i = 0; i < n - 1; i++) {
        let m = new Map(), overlap = 0, lineMax = 0;
        for (let j = i + 1; j < n; j++) {
            let x = points[i].x - points[j].x;
            let y = points[i].y - points[j].y;
            if (x == 0 && y == 0) {
                overlap++;
                continue;
            }
            let gcd = generateGcd(x, y);
            x /= gcd;
            y /= gcd;
            let slope = x + '_' + y;
            let count = m.has(slope) ? m.get(slope) : 0;
            count++;
            m.set(slope, count);
            lineMax = Math.max(lineMax, count);
        }
        res = Math.max(res, lineMax + overlap + 1);
    }
    return res;
};
var generateGcd = function(x, y) {
    return y == 0 ? x : generateGcd(y, x % y);
}
