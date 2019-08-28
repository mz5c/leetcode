/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode nh = new ListNode(0);
        nh.next = head;
        ListNode l1,l2,h = nh;
        while (true) {
            if (null != h.next && null != h.next.next) {
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
    }
}