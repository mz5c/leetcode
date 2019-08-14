/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode tail = head;
        int targetNodeCount = 0;
        int totalNodes = 0;
        ListNode result = new ListNode(0);
        result.next = head;
        ListNode currentNode = result;
        if (null == head) {
            return null;
        }
        while (null != tail) {
            tail = tail.next;
            totalNodes++;
        }
        targetNodeCount = totalNodes - n;
        while (targetNodeCount > 0) {
            currentNode = currentNode.next;
            targetNodeCount--;
        }
        currentNode.next = currentNode.next.next;
        return result.next;
    }
}