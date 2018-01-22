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
    let flag = false,res = new ListNode(0), tmp = res;
    while(head) {
        if (head.next) {
            if (head.next.val == head.val) {
                flag = true;
            } else if (flag) {
                flag = false;
            } else {
                tmp.next = new ListNode(head.val);
                tmp = tmp.next;
            }
        } else if (!flag) {
            tmp.next = new ListNode(head.val);
            tmp = tmp.next;
        }
        head = head.next;
    }
    return res.next;
};
