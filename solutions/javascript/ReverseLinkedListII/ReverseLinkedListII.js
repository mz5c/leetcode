/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m === n) {
        return head;
    }
    let cur = new ListNode(0), count = 0;
    cur.next = head;
    let res = cur, l = null, r = null, arr = [];
    while (true) {
        if (count == m - 1) {
            l = cur;
        } else if (count >= m && count <= n) {
            arr.unshift(cur.val);
            if (count == n) {
                r = cur.next;
                break;
            }
        }
        count++;
        cur = cur.next;
    }
    let p = new ListNode(0), c = p;
    for (let i = 0; i < arr.length; i++) {
        let tmp = new ListNode(arr[i]);
        c.next = tmp;
        c = c.next;
    }
    l.next = p.next;
    c.next = r;
    return res.next;
};
