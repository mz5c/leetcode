/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var nh = new ListNode(0);
    nh.next = head;
    var l1 = null, l2 = null, h = nh;
    while (true) {
        if (h.next && h.next.next) {
            l1 = h.next;
            l2 = l1.next;
            l1.next = l2.next;
            l2.next = l1;
            h.next = l2;
            h = l1;
        } else {
            break;
        }
    }
    return nh.next;
};
