/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.origin = nums.slice();
    this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var xxx = this.arr;
    for(var j,x,i=xxx.length;i;j=parseInt(Math.random()*i),x=xxx[--i],xxx[i]=xxx[j],xxx[j]=x);
    return xxx;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
