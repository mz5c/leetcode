/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        let j = magazine.indexOf(ransomNote[i]);
        if (j === -1) {
            return false;
        }
        magazine = magazine.substr(0, j) + magazine.substr(j + 1);
    }
    return true;
};
