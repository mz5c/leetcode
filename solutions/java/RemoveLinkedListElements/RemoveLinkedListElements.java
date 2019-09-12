/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode l = new ListNode(0);
        l.next = head;
        head = l;
        while (null != l.next) {
            if (l.next.val == val) {
                l.next = l.next.next;
            } else {
                l = l.next;
            }
        }
        return head.next;
    }
}