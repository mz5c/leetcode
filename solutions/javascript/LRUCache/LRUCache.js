/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.n = capacity;
    this.m = new Map();
    this.a = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.m.has(key)) {
        if (this.a[0] != key) {
            this.a.splice(this.a.indexOf(key), 1);
            this.a.unshift(key);
        }
        return this.m.get(key);
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.m.has(key)) {
        if (this.a[0] != key) {
            this.a.splice(this.a.indexOf(key), 1);
            this.a.unshift(key);
        }
        this.m.set(key, value);
    } else if (this.m.size < this.n) {
        this.m.set(key, value);
        this.a.unshift(key);
    } else {
        this.m.delete(this.a.pop());
        this.a.unshift(key);
        this.m.set(key, value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
