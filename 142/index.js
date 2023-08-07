/**
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 输入：head = [3,2,0,-4], pos = 1
   输出：返回索引为 1 的链表节点
   解释：链表中有一个环，其尾部连接到第二个节点。
 */

/**
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
   
    // let p = head
    s = new Set()
    while(head!=null){
      if(s.has(head)){
        return head
      }
      s.add(head)
      head = head.next
    }

    return null
};


const list = new ListNode(3);
list.next = new ListNode(2);
list.next.next = new ListNode(0);
list.next.next.next = new ListNode(-4);
list.next.next.next.next = list.next
console.log(detectCycle(list))