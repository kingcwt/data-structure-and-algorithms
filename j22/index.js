/**
 * 给定一个链表: 1->2->3->4->5, 和 k = 2.
   返回链表 4->5.
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let arr = [];
  while(head){
    arr.push(head)
    head = head.next
  }
  return arr[arr.length-k]
  console.log(arr,'arr123123')
};


l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)

console.log(getKthFromEnd(l1,2))