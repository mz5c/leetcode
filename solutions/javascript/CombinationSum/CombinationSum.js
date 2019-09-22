var res = [];
var tmp = [];
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    res = [];
    xxx(candidates.sort((x,y)=>x-y), target, 0, []);
    return res;
};

var xxx = function(candidates, left, start, arr) {
    for (var i = start; i < candidates.length; i++) {
        if (candidates[i] > left) {
            return;
        } else if (candidates[i] == left) {
            tmp = arr.slice();
            tmp.push(candidates[i]);
            res.push(tmp);
            return;
        } else {
            tmp = arr.slice();
            tmp.push(candidates[i]);
            xxx(candidates, left - candidates[i], i, tmp);
        }
    }
};