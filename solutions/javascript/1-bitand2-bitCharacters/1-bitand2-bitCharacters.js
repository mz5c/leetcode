/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for (var i = 0; i < bits.length; i++) {
        if (bits[i] == 1) {
            i++;
        } else if (bits[i] == 0 && i == bits.length - 1) {
            return true;
        }
    }
    return false;
};
