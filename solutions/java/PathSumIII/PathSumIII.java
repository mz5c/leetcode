/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int pathSum(TreeNode root, int sum) {
        if (null == root) {
            return 0;
        }
        return cal(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    }

    private int cal(TreeNode root, int pre, int sum) {
        if (null == root) {
            return 0;
        }
        int cur_sum = pre + root.val;
        return (cur_sum == sum ? 1 : 0) + cal(root.left, cur_sum, sum) + cal(root.right, cur_sum, sum);
    }
}