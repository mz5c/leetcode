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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    res = false;
    xxx(root, sum, 0);
    return res;
};
var xxx = function(root, sum, cur_sum) {
    if (root && !res) {
        cur_sum += root.val;
        if (!root.left && !root.right) {
            if (cur_sum == sum) {
                res = true;
            }
            return;
        }
        xxx(root.left, sum, cur_sum);
        xxx(root.right, sum, cur_sum);
    }
};
