/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let l = Math.ceil(Math.sqrt(area)), w = area / l;
    while (true) {
        if (w === Math.floor(w)) {
            return [l, w];
        } else {
            l++;
            w = area / l;
        }
    }
};
