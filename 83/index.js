// 输入：head = [1,1,2]
// 输出：[1,2]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 定义测试数据链表1: 1 -> 1 -> 2
const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(2);




/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if(!head) return head
    let p = head
    while(p.next){
        if(p.val === p.next.val){
            p.next = p.next.next
        }else{
            p = p.next
        }
        
    }
    return head
};

console.log(deleteDuplicates(head))
