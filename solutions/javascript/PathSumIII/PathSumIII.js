/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return 0;
    }
    return xxx(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
var xxx = function(root, pre, sum) {
    if (!root) {
        return 0;
    }
    let cur_sum = pre + root.val;
    return (cur_sum == sum ? 1 : 0) + xxx(root.left, cur_sum, sum) + xxx(root.right, cur_sum, sum);
};
