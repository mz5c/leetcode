/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.arr.length == 0) {
        return undefined;
    } else {
        return this.arr[this.arr.length - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.arr.length == 0) {
        return undefined;
    } else {
        var min = this.arr[0];
        for (var i = 1; i < this.arr.length; i++) {
            if (min > this.arr[i]) {
                min = this.arr[i];
            }
        }
        return min;
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */