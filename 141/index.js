/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let a = head,b = head;
    while(a!==null&&a.next!==null){
        b = b.next;
        a = a.next.next;
        if(a===b) return true;
    }
    return false;
};