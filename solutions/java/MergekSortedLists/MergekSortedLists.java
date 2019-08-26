/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        List<Integer> a = new ArrayList<>();
        for (int i = 0; i < lists.length; i++) {
            ListNode l = lists[i];
            while (null != l) {
                a.add(l.val);
                l = l.next;
            }
        }
        Collections.sort(a);
        if (a.isEmpty()) {
            return null;
        }
        ListNode res = new ListNode(a.get(0));
        ListNode p = res;
        for (int j = 1; j < a.size(); j++) {
            p.next = new ListNode(a.get(j));
            p = p.next;
        }
        return res;
    }
}