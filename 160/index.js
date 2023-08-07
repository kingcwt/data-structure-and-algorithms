/**
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
   输出：Intersected at '8'
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    
    console.log(headA, headB)
    let nodeSet = new Set()
    while(headA !=null){
        nodeSet.add(headA)
        headA = headA.next
    }

    console.log(nodeSet)
    while(headB !=null){
        if(nodeSet.has(headB)){
            return headB
        }
        headB = headB.next
    }

};

l3 = new ListNode(8)
l3.next = new ListNode(4)
l3.next.next = new ListNode(5)

l1 = new ListNode(4)
l1.next = new ListNode(1)
l1.next.next = l3
l1.next.next.next = l3.next
l1.next.next.next.next = l3.next.next
l2  = new ListNode(5)
l2.next  = new ListNode(6)
l2.next.next  = new ListNode(1)
l2.next.next.next  = l3
l2.next.next.next.next  = l3.next
l2.next.next.next.next.next  =l3.next.next
console.log(getIntersectionNode(l1,l2))