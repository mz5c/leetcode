### 解题思路
>看代码理解吧，用java解的话理解怎么用stack即可  
>需要注意一个特殊case：输入"/../"应该返回"/"
```java
class Solution {
    public String simplifyPath(String path) {
        String[] strings = path.split("/");
        Stack<String> stack = new Stack<>();
        for (String s : strings) {
            if ("".equals(s) || ".".equals(s)) {
                continue;
            } else if ("..".equals(s)) {
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else {
                stack.push(s);
            }
        }
        if (stack.isEmpty()) {
            return "/";
        }
        StringBuilder result = new StringBuilder("/");
        for (Object o : stack.toArray()) {
            result.append(o.toString()).append("/");
        }
        return result.toString().substring(0, result.length() - 1);
    }
}
```