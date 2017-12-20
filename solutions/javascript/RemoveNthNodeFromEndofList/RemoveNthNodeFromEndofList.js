/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var nh = new ListNode(0);
    nh.next = head;
    var len = 0;
    while (head) {
        len++;
        head = head.next;
    }
    if (len < n || n < 1) {
        return nh.next;
    }
    head = nh;
    len -= n;
    while (len) {
        len--;
        head = head.next;
    }
    head.next = head.next.next;
    return nh.next;
};
