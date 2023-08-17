### **[234. 回文链表](https://leetcode.cn/problems/palindrome-linked-list/)**

给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。

<img src="./algorithm08.png" height={650} />

```jsx
输入：head = [1,2,2,1]
输出：true
```

- javascript

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let curArr = []
  while(head){
    curArr.push(head.val)
    head = head.next
  }
  for (let i=0;i<curArr.length;i++){
    if(curArr[i]!=curArr[curArr.length-1-i]) return false
  }
  return true
};
```

- golang

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {

     arr := []int{}
     for head !=nil {
      arr = append(arr,head.Val)
      head = head.Next
     }
     for i:=0;i<len(arr);i++ {
       if arr[i] != arr[len(arr)-1-i] {
         return false
       }
     }
     return true
}
```
