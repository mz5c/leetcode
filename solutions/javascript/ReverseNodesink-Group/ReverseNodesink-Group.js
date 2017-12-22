/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var copy = head;
    if (k <= 1 || !head) {
        return head;
    }
    var a = [];
    var b = [];
    while (copy != null) {
        a.push(copy.val);
        copy = copy.next;
    }
    if (a.length < k) {
        return head;
    }
    for (var i = 0; i < a.length; i+=k) {
        if (a.slice(i, i+k).length == k) {
            b = b.concat(a.slice(i, i+k).reverse());
        } else {
            b = b.concat(a.slice(i, i+k));
        }
    }
    var res = new ListNode(b[0]);
    copy = res;
    for (var j = 1; j < b.length; j++) {
        copy.next = new ListNode(b[j]);
        copy = copy.next;
    }
    return res;
};
