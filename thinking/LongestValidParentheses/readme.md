### 解题思路
>虽然题目难度显示为hard，但其实只要理解了解题思路，就很容易了，看代码理解吧  
>也可以不用stack，用数组也行
```java
class Solution {
    public int longestValidParentheses(String s) {
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);
        int max = 0;
        for (int i = 0; i < s.length(); i++) {
            int t = stack.peek();
            //获取当前匹配子串的开始结束下标，计算长度
            if (t != -1 && s.charAt(i) == ')' && s.charAt(t) == '(') {
                stack.pop();
                max = Math.max(max, i - stack.peek());
            } else {
                stack.push(i);
            }
        }
        return max;
    }
}
```