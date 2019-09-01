/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        //列表长度为0或1时直接返回
        if (null == head || null == head.next) {
            return head;
        }
        ListNode left = head;
        ListNode right = head;
        int counter = k;

        while (counter > 1) {
            right = right.next;
            counter--;
            if (null == right) {
                return head;
            }
        }

        head = right;
        ListNode last = left;
        ListNode next = right.next;

        while (null != right) {
            while (left != right) {
                ListNode tmp = left;
                left = left.next;
                tmp.next = right.next;
                right.next = tmp;
            }
            counter = k;
            left = next;
            right = next;
            while (counter > 1 && null != right) {
                right = right.next;
                counter--;
            }
            if (null != right) {
                next = right.next;
                last.next = right;
                last = left;
            }
        }
        return head;
    }
}