var res = null;
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    res = [];
    xxx(root, 0);
    var arr = [];
    for (var i = 0; i < res.length; i++) {
        arr.push(res[i].pop());
    }
    return arr;
};
var xxx = function(root, i) {
    if (root) {
        if (res[i] == undefined) {
            res[i] = [];
        }
        res[i].push(root.val);
        xxx(root.left, i + 1);
        xxx(root.right, i + 1);
    }
};
