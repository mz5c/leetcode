### 解题思路
>递归求解，题目比较简单，看代码理解
```java
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
```