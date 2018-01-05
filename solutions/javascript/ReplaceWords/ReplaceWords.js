/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    var arr = sentence.split(' ');
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        res.push(arr[i]);
        for (var j = 0; j < dict.length; j++) {
            if (arr[i].indexOf(dict[j]) == 0) {
                res.pop();
                res.push(dict[j]);
                break;
            }
        }
    }
    return res.join(' ');
};
