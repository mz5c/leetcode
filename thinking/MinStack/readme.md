### 解题思路
>下面的解法虽然思路很好，但用的是已有Stack类

```java
class MinStack {

    /** initialize your data structure here. */
    Stack<Integer> minStack = new Stack<Integer>();
    int min = Integer.MAX_VALUE;
    public MinStack() {
    }
    
    public void push(int x) {
        if(x<=min) { 
            minStack.push(min);
            min=x; 
        }
        minStack.push(x);
    }
    
    public void pop() {
        if(min == minStack.pop()) 
            min = minStack.pop();
    }
    
    public int top() 
    {
        int item = minStack.peek();
        return item;
    }
    
    public int getMin() 
    {
        return min;
    }
}
```