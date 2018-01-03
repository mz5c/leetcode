/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var res = [1];
    if (ratings.length == 1) {
        return 1;
    }
    for (var i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            res[i] = res[i - 1] + 1;
        } else {
            res[i] = 1;
        }
    }
    for (var j = ratings.length - 2; j >= 0; j--) {
        if (ratings[j] > ratings[j + 1]) {
            res[j] = Math.max(res[j], res[j + 1] + 1);
        }
    }
    return res.reduce((x,y)=>x+y);
};
