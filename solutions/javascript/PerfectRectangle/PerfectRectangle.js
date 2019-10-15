/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    if (rectangles.length < 2) {
        return true;
    }
    var x1 = rectangles[0][0];
    var y1 = rectangles[0][1];
    var x2 = rectangles[0][2];
    var y2 = rectangles[0][3];
    var total = (x2 - x1) * (y2 - y1);
    var s = new Set();
    s.add(x1 + ' ' + y1);
    s.add(x1 + ' ' + y2);
    s.add(x2 + ' ' + y1);
    s.add(x2 + ' ' + y2);
    for (var i = 1; i < rectangles.length; i++) {
        total += (rectangles[i][2] - rectangles[i][0]) * (rectangles[i][3] - rectangles[i][1]);
        if (x1 > rectangles[i][0]) {
            x1 = rectangles[i][0];
        }
        if (y1 > rectangles[i][1]) {
            y1 = rectangles[i][1];
        }
        if (x2 < rectangles[i][2]) {
            x2 = rectangles[i][2];
        }
        if (y2 < rectangles[i][3]) {
            y2 = rectangles[i][3];
        }
        var s1 = rectangles[i][0] + ' ' + rectangles[i][1];
        var s2 = rectangles[i][0] + ' ' + rectangles[i][3];
        var s3 = rectangles[i][2] + ' ' + rectangles[i][1];
        var s4 = rectangles[i][2] + ' ' + rectangles[i][3];
        if (s.has(s1)) {s.delete(s1);} else {s.add(s1);}
        if (s.has(s2)) {s.delete(s2);} else {s.add(s2);}
        if (s.has(s3)) {s.delete(s3);} else {s.add(s3);}
        if (s.has(s4)) {s.delete(s4);} else {s.add(s4);}
    }
    if (!s.has(x1 + ' ' + y1) || !s.has(x1 + ' ' + y2) || !s.has(x2 + ' ' + y1) || !s.has(x2 + ' ' + y2) || s.size != 4) {return false;}
    return total == (x2 - x1) * (y2 - y1) ? true : false;
};