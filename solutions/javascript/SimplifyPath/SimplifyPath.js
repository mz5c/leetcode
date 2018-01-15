/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr = path.split('/').filter(x=>x!='');
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '.') {
            continue;
        } else if (arr[i] == '..') {
            if (res.length > 0) {
                res.pop();
            }
        } else {
            res.push(arr[i]);
        }
    }
    return '/' + res.join('/');
};
