### 解题思路
>需要点空间想象能力和画图思考能力去理解  
>也可以试一下递归方式求解
```java
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        int cnt = k;
        ListNode cur = head;
        //下面2段代码只是为了判断剩余列表长度是否小于k，是则直接返回head
        for (; cur != null && cnt-- > 0; cur = cur.next) ;
        if (cnt > 0) return head;
        cur = head;
        ListNode next = cur.next;
        for (int i = 0; i < k - 1; i++) {
            head.next = next.next;
            next.next = cur;
            cur = next;
            next = head.next;
        }
        head.next = reverseKGroup(head.next, k);
        return cur;  
    }
}
```