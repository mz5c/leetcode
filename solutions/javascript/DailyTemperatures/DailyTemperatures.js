/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = [];
    for (let i = 0; i < temperatures.length - 1; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j - i;
                break;
            }
        }
        if (res[i] === undefined) {
            res[i] = 0;
        }
    }
    res.push(0);
    return res;
};
