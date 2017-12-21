/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var a = [];
    for (var i = 0; i < lists.length; i++) {
        var l = lists[i];
        while (true) {
            if (!l) {
                break;
            }
            a.push(l.val);
            l = l.next;
        }
    }
    a = a.sort((x,y)=>x-y);
    if (a[0] == undefined) {
        return null;
    }
    var res = new ListNode(a[0]);
    var p = res;
    for (var j = 1; j < a.length; j++) {
        p.next = new ListNode(a[j]);
        p = p.next;
    }
    return res;
};
