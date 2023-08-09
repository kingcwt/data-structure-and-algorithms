/**
 * 输入：head = [1,2,3,4,5]
   输出：[3,4,5]
   解释：链表只有一个中间结点，值为 3 。
 * Definition for singly-linked list.

 */

   function ListNode(val) {
    this.val = val;
    this.next = null;
  }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = fast = head
    while(fast&&fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};

l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)
console.log(middleNode(l1))