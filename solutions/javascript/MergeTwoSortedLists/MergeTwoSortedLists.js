/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1 
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) {
        return l1 ? l1 : l2;
    }
    var a = [];
    while(l1 || l2) {
        if (l1) {
            a.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            a.push(l2.val);
            l2 = l2.next;
        }
    }
    a = a.sort((x,y)=>x-y);
    l1 = new ListNode(a[0]);
    l2 = l1;
    for (var i = 1; i < a.length; i++) {
        l2.next = new ListNode(a[i]);
        l2 = l2.next;
    }
    return l1;
};
