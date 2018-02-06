/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let arr = [];
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            arr.push(parseInt(tokens[i]));
        } else {
            let b = arr.pop(), a = arr.pop();
            arr.push(xxx(a, b, tokens[i]));
        }
    }
    return arr.pop();
};
var xxx = function(a, b, op) {
    if (op === '+') {
        return a + b;
    } else if (op === '-') {
        return a - b;
    } else if (op === '*') {
        return a * b;
    } else if (op === '/') {
      return parseInt(a / b);
    }
};
