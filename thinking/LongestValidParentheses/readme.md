### 解题思路
>虽然题目难度显示为hard，但其实只要理解了解题思路，就很容易了，看代码理解吧  
>也可以不用stack，用数组也行  
>重要的是要理解往栈中先放入-1的用意，最好能自己代入一个例子去理解
```java
class Solution {
    public int longestValidParentheses(String s) {
        //stack用来记录s中每个字符的下标
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);//这个栈底的-1很重要
        int max = 0;
        for (int i = 0; i < s.length(); i++) {
            int t = stack.peek();
            //当前字符左右小括号匹配时，弹出栈顶元素并计算此时最长匹配子串长度
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