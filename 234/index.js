function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * 输入：head = [1,2,2,1]
   输出：true
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
 let arr = []
  while(head){
    arr.push(head.val)
    head = head.next
  }

  for(let i=0;i<arr.length;i++){
    if(arr[i]!==arr[arr.length-1-i]) return false
  }

  return true
};

const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(1)

console.log(isPalindrome(list))
