class MinStack {

    private int[] stack;
    private int top;
    private int min = Integer.MIN_VALUE;

    /** initialize your data structure here. */
    public MinStack() {
        stack = new int[16];
        top = -1;
    }

    public void push(int x) {
        top++;
        if (top > stack.length - 1) {
            int[] tmp = new int[stack.length + 16];
            System.arraycopy(stack, 0, tmp, 0, stack.length);
            stack = tmp;
        }
        stack[top] = x;
        calcMin();
    }

    public void pop() {
        if (top >= 0) {
            top--;
            calcMin();
        }
    }

    public int top() {
        return top < 0 ? Integer.MIN_VALUE : stack[top];
    }

    public int getMin() {
        return min;
    }

    private void calcMin() {
        if (top >= 0) {
            min = stack[0];
        }
        for (int i = 1; i <= top; i++) {
            min = Math.min(min, stack[i]);
        }
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */