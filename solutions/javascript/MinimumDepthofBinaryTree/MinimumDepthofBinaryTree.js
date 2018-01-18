/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    if (!root.left) {
        return !root.right ? 1 : minDepth(root.right) + 1;
    } else {
        return !root.right ? minDepth(root.left) + 1 : Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1);
    }
};
