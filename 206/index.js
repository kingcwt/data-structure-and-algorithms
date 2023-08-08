/**
 * 输入：head = [1,2,3,4,5]
   输出：[5,4,3,2,1]
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
    if (head === null) return head
    let pre = null,cur = head;
    while(cur){
        const next = cur.next
        cur.next = pre;
        pre = cur;
        cur = next
    }
    return pre
};

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(reverseList(list))
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function(head) {
//     let cur = head;
//     let pre = null;
//     while(cur){
//         let next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre;
// };
