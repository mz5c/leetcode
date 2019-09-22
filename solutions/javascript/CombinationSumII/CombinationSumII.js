var res = [];
var tmp = [];
var m = null;
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    res = [];
    m = new Map();
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
            if (!m.has(tmp.join('_'))) {
                m.set(tmp.join('_'), 1);
                res.push(tmp);
            }
            return;
        } else {
            tmp = arr.slice();
            tmp.push(candidates[i]);
            xxx(candidates, left - candidates[i], i + 1, tmp);
        }
    }
};