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
var deleteDuplicates = function(head) {
    let new_head = new ListNode('head');
    new_head.next = head;
    while (head) {
        if (head.next && head.next.val === head.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    return new_head.next;
};
