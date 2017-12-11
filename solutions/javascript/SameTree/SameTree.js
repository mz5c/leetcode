/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p && q && p.val == q.val) {
        if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
            return true;
        }
    } else if (!p && !q) {
        return true;
    }
    return false;
};
