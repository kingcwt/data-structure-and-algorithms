### **[876. 链表的中间结点](https://leetcode.cn/problems/middle-of-the-linked-list/)**

给你单链表的头结点 `head` ，请你找出并返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

<img src='/algorithm9.png' height={650} />

```go
输入：head = [1,2,3,4,5]
输出：[3,4,5]
解释：链表只有一个中间结点，值为 3 。
```

- javascript

```go
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
func middleNode(head *ListNode) *ListNode {
    slow := head
    fast := head
    for fast!=nil && fast.Next !=nil{
        slow = slow.Next
        fast = fast.Next.Next
    }
    return slow
}
```