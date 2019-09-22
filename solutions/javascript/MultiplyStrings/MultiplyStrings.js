/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var res = Array(num1.length + num2.length).fill(0);
    for (var i = num1.length - 1; i >= 0; i--) {
        for (var j = num2.length - 1; j >= 0; j--) {
            var mul = parseInt(num1[i]) * parseInt(num2[j]);
            var p1 = i + j, p2 = i + j + 1;
            var sum = mul + res[p2];
            res[p1] += parseInt(sum / 10);
            res[p2] = sum % 10;
        }
    }
    if (res[0] == 0) {
        res.shift();
    }
    return res.join('') == 0 ? '0' : res.join('');
};