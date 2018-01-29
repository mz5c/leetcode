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
var inorderTraversal = function(root) {
    let res = [];
    if (!root) {
        return res;
    }
    xxx(root.left, res);
    res.push(root.val);
    xxx(root.right, res);
    return res;
};
var xxx = function(root, res) {
    if (root) {
        xxx(root.left, res);
        res.push(root.val);
        xxx(root.right, res);
    }
};
