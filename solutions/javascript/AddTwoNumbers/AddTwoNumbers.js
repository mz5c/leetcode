/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var a = l1.val + l2.val;
    var b = parseInt(a / 10);
    var res = new ListNode(a % 10);
    var xxx = res;
    var n1 = l1.next;
    var n2 = l2.next;
    while (true) {
        a = n1 === null ? b : n1.val + b;
        a = n2 === null ? a : n2.val + a;
        if (a === 0 && n1 === null && n2 === null) {
            break;
        } else if (n1 === null && n2 === null) {
            xxx.next = new ListNode(a);
            break;
        } else {
            xxx.next = new ListNode(a % 10);
            xxx = xxx.next;
            b = parseInt(a / 10);
            n1 = n1 === null ? null : n1.next;
            n2 = n2 === null ? null : n2.next;
        }
    }
    return res;
};
