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
var reverseList = function(head) {
    if (head == null) {
        return head;
    }
    var res = new ListNode(head.val);
    while (head.next !== null) {
        head = head.next;
        var p = new ListNode(head.val);
        p.next = res;
        res = p;
    }
    return res;
};
