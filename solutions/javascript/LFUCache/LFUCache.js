var ListNode = function(key, count) {
    this.key = key;
    this.count = count;
    this.next = null;
}
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.n = capacity;
    this.map = new Map();
    this.fq_map = new Map();
    this.fq_list = new ListNode(0, 0);
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        var count = this.fq_map.get(key);
        var p = this.fq_list;
        while (p) {
            if (p.next) {
                if (p.next.key == key) {
                    if (!p.next.next || p.next.next.count > count + 1) {
                        p.next.count = count + 1;
                        break;
                    } else {
                        p.next = p.next.next;
                        p = p.next;
                    }
                } else {
                    if (p.next.count <= count + 1) {
                        p = p.next;
                    } else {
                        var nl = new ListNode(key, count + 1);
                        nl.next = p.next;
                        p.next = nl;
                        break;
                    }
                }
            } else {
                p.next = new ListNode(key, count + 1);
                break;
            }
        }
        this.fq_map.set(key, count + 1);
        return this.map.get(key);
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.n <= 0) {
        return;
    }
    if (this.map.has(key)) {
        this.map.set(key, value);
        var count = this.fq_map.get(key);
        var p = this.fq_list;
        while (p) {
            if (p.next) {
                if (p.next.key == key) {
                    if (!p.next.next || p.next.next.count > count + 1) {
                        p.next.count = count + 1;
                        break;
                    } else {
                        p.next = p.next.next;
                        p = p.next;
                    }
                } else {
                    if (p.next.count <= count + 1) {
                        p = p.next;
                    } else {
                        var nl = new ListNode(key, count + 1);
                        nl.next = p.next;
                        p.next = nl;
                        break;
                    }
                }
            } else {
                p.next = new ListNode(key, count + 1);
                break;
            }
        }
        this.fq_map.set(key, count + 1);
    } else if (this.map.size < this.n) {
        this.map.set(key, value);
        this.fq_map.set(key, 1);
        if (this.map.size == 1) {
            this.fq_list.next = new ListNode(key, 1);
        } else {
            var p = this.fq_list;
            while (p) {
                if (p.next) {
                    if (p.next.count < 2) {
                        p = p.next;
                    } else {
                        var nl = new ListNode(key, 1);
                        nl.next = p.next;
                        p.next = nl;
                        break;
                    }
                } else {
                    p.next = new ListNode(key, 1);
                    break;
                }
            }
        }
    } else {
        var dk = this.fq_list.next.key;
        this.fq_list.next = this.fq_list.next.next;
        this.map.delete(dk);
        this.fq_map.delete(dk);
        this.map.set(key, value);
        this.fq_map.set(key, 1);
        var p = this.fq_list;
        while (p) {
            if (p.next) {
                if (p.next.count < 2) {
                    p = p.next;
                } else {
                    var nl = new ListNode(key, 1);
                    nl.next = p.next;
                    p.next = nl;
                    break;
                }
            } else {
                p.next = new ListNode(key, 1);
                break;
            }
        }
    }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
