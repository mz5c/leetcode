/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var l = new ListNode(0);
    l.next = head;
    head = l;
    while (l.next) {
        if (l.next.val == val) {
            l.next = l.next.next;
        } else {
            l = l.next;
        }
    }
    return head.next;
};