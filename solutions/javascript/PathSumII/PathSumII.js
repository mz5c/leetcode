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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    res = [];
    xxx(root, sum, 0, []);
    return res;
};
var xxx = function(root, sum, cur_sum, arr) {
    if (root) {
        cur_sum += root.val;
        var tmp = arr.slice();
        tmp.push(root.val);
        if (!root.left && !root.right) {
            if (cur_sum == sum) {
                res.push(tmp);
            }
            return;
        }
        xxx(root.left, sum, cur_sum, tmp);
        xxx(root.right, sum, cur_sum, tmp);
    }
};
