/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int a = l1.val + l2.val;
        int b = a/10;
        ListNode head = new ListNode(a % 10);
        ListNode current = head;
        ListNode n1 = l1.next;
        ListNode n2 = l2.next;
        while (null != n1 || null != n2) {
            a = null == n1 ? b : n1.val + b;
            a = null == n2 ? a : n2.val + a;
            current.next = new ListNode(a % 10);
            current = current.next;
            b = a / 10;
            n1 = null == n1 ? null : n1.next;
            n2 = null == n2 ? null : n2.next;
        }
        if (b > 0) {
            current.next = new ListNode(1);
        }
        return head;
    }
}