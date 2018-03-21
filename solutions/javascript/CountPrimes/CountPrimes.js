/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0, arr = Array(n).fill(false);
    for (let i = 2; i < n; i++) {
        if (!arr[i]) {
            count++;
            for (let j = 2; i * j < n; j++) {
                arr[i * j] = true;
            }
        }
    }
    return count;
};
