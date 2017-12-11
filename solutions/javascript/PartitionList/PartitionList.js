/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var ltx = new ListNode('head'), ltxp = ltx;
    var gex = new ListNode('head'), gexp = gex;
    gexp.next = head;
    while (gexp.next) {
        if (gexp.next.val < x) {
            ltxp.next = new ListNode(gexp.next.val);
            ltxp = ltxp.next;
            gexp.next = gexp.next.next;
        } else {
            gexp = gexp.next;
        }
    }
    ltxp.next = gex.next;
    return ltx.next;
};
