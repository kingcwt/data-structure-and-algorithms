# data-structure-and-algorithms

### **[876. 链表的中间结点](./876/README.MD)**
### **[232. 用栈实现队列](./232/README.MD)**

### **[101. 对称二叉树](./101/README.MD)**
### **[144. 二叉树的前序遍历](./144/README.MD)**

### **[94. 二叉树的中序遍历](./94/README.MD)**
### **[145. 二叉树的后序遍历](./145/README.MD)**

### **[394. 字符串解码](./394/README.MD)**

### **[70. 爬楼梯](./70/README.MD)**
### **[1. 两数之和](./1/README.MD)**

### **[88. 合并两个有序数组](./88/README.MD)**

### **[283. 移动零](./283/README.MD)**


### **[448. 找到所有数组中消失的数字](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/)**

给你一个含 `n` 个整数的数组 `nums` ，其中 `nums[i]` 在区间 `[1, n]` 内。请你找出所有在 `[1, n]` 范围内但没有出现在 `nums` 中的数字，并以数组的形式返回结果。

- 示例

```jsx
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
```

- js

```jsx
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = [];
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            arr.push(i)
        }
    }
    return arr;
};
```

- go

```jsx
func findDisappearedNumbers(nums []int) []int {
    arr :=[]int{}
    m := make(map[int]bool)
    for _,v := range nums {
        m[v] = true
    }

    for i:=1;i<=len(nums);i++{
        if m[i]!= true {
            arr = append(arr,i)
        }
    }
    return arr
}
```

### **[21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)**

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

<img src='/algorithm2.png' height={650} />


```jsx
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

- js

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
     if (list1 === null && list2 ===null) return list1
     
     const d = new ListNode(0)
     let p = d
     while(list1!==null&&list2!==null){
         if(list1.val < list2.val){
             p.next = list1
             list1 = list1.next
         }else{
             p.next = list2
             list2 = list2.next
         }
         p = p.next
     }

     p.next = list1?list1:list2

     return d.next
};
```

- 通过节点方式实现

```jsx
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
// 定义测试数据链表1: 1 -> 2 -> 4
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// 定义测试数据链表2: 1 -> 3 -> 4
const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if (list1 === nul && list2 === null) return list1

    const dummy = new ListNode(0);
    let p = dummy;

    while(list1!==null&&list2!==null){
        if(list1.val < list2.val){
            p.next = list1;
            list1 = list1.next
        }else{
           p.next = list2;
           list2 = list2.next
        }
        p = p.next
    }

    p.next = list1?list1:list2
    return dummy.next
};
```

- 通过对象的方式实现

```jsx
let l1 = {
    val:1,
    next:{
        val:2,
        next:{
            val:4
        }
    }
}
let l2 = {
    val:1,
    next:{
        val:3,
        next:{
            val:4
        }
    }
}
// 通过对象的方式去实现
var mergeTwoLists2 = function(l1, l2) {
    
    if (l1 === null&&l2 === null) return l1;
    const d = {val:0}
    let p = d
    while (l1 && l2 ) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    p.next = l1 ? l1 : l2
    return d.next
}

console.log(mergeTwoLists2(l1,l2))
```

- go

```jsx
package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {

	if list1 == nil && list2 == nil {
		return list1
	}
	d := &ListNode{Val: 0}
	p := d

	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			p.Next = list1
			list1 = list1.Next
		} else {
			p.Next = list2
			list2 = list2.Next
		}
		p = p.Next
	}

	if list1 != nil {
		p.Next = list1
	}
	if list2 != nil {
		p.Next = list2
	}
	return d.Next
}

func main() {
	// Linked list 1: 1 -> 2 -> 4
	list1 := &ListNode{Val: 1}
	list1.Next = &ListNode{Val: 2}
	list1.Next.Next = &ListNode{Val: 4}

	// Linked list 2: 1 -> 3 -> 4
	list2 := &ListNode{Val: 1}
	list2.Next = &ListNode{Val: 3}
	list2.Next.Next = &ListNode{Val: 4}

	result := mergeTwoLists(list1, list2)

	p := result

	for p != nil {
		fmt.Printf("%d ", p.Val)
		p = p.Next
	}
}
```

### **[83. 删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)**

给定一个已排序的链表的头 `head` ， *删除所有重复的元素，使每个元素只出现一次* 。返回 *已排序的链表* 。

<img src='./algorithm3.png' height={650} />


```jsx
输入：head = [1,1,2]
输出：[1,2]
```

- js

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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
   if (!head) return head
    let p = head
    while(p.next){
        if(p.val === p.next.val) {
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return head
};

// local
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
```

- go

```jsx
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
       if head == nil {
           return head
       }

       p := head
       for p.Next!=nil{
           if p.Val == p.Next.Val {
               p.Next = p.Next.Next
           }else {
               p = p.Next
           }
       }
       return head
}

// local
package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	p := head
	for p.Next != nil {
		if p.Val == p.Next.Val {
			p.Next = p.Next.Next
		} else {
			p = p.Next
		}
	}
	return head
}

func main() {
	list := &ListNode{Val: 1}
	list.Next = &ListNode{Val: 1}
	list.Next.Next = &ListNode{Val: 2}

	result := deleteDuplicates(list)

	r := result
	for r != nil {
		fmt.Printf("%d\n", r.Val)
		r = r.Next
	}
}
```

### **[141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)**

给你一个链表的头节点 `head` ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：`pos` 不作为参数进行传递** 。仅仅是为了标识链表的实际情况。

*如果链表中存在环* ，则返回 `true` 。 否则，返回 `false` 。

<img src='./algorithm4.png' height={650} />


```jsx
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

- go

```jsx
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
      a := head
      b := head
      
      for b!=nil && b.Next!=nil {
          a = a.Next
          b = b.Next.Next
          if a == b {
              return true
          }
      }
      return false
}
```

- js

```jsx
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
    
    while(b!==null && b.next!==null){
        a = a.next
        b = b.next.next
        if (a === b) return true
    }
    return false
};
```


### **[142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)**

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`。*

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

<img src='./algorithm5.png' height={650} />

```jsx
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

- js

```jsx
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
```

- go

```go
package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func detectCycle(head *ListNode) *ListNode {

	m := make(map[*ListNode]bool)

	for head != nil {
		if _, ok := m[head]; ok {
			return head
		}
		m[head] = true
		head = head.Next
	}
	return nil
}

func main() {
	list := &ListNode{Val: 3}
	list.Next = &ListNode{Val: 2}
	list.Next.Next = &ListNode{Val: 0}
	list.Next.Next.Next = &ListNode{Val: -4}
	list.Next.Next.Next.Next = list.Next
	res := detectCycle(list)
	fmt.Printf("res:=%v", res.Val)
}
```

### **[160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)**

给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。

<img src='./algorithm6.png' height={650} />
<img src='./algorithm7.png' height={650} />

```go
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。
```

- js

```jsx
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
```

- go

```go
package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {

	nodeSet := make(map[*ListNode]bool)

	for headA != nil {
		nodeSet[headA] = true
		headA = headA.Next
	}

	for headB != nil {
		if _, ok := nodeSet[headB]; ok {
			return headB
		}
		headB = headB.Next
	}

	return nil

}

func main() {
	l3 := &ListNode{Val: 8}
	l3.Next = &ListNode{Val: 4}
	l3.Next.Next = &ListNode{Val: 5}

	l1 := &ListNode{Val: 4}
	l1.Next = &ListNode{Val: 1}
	l1.Next.Next = l3
	l1.Next.Next.Next = l3.Next
	l1.Next.Next.Next.Next = l3.Next.Next

	l2 := &ListNode{Val: 5}
	l2.Next = &ListNode{Val: 6}
	l2.Next.Next = &ListNode{Val: 1}
	l2.Next.Next.Next = l3
	l2.Next.Next.Next.Next = l3.Next
	l2.Next.Next.Next.Next.Next = l3.Next.Next

	res := getIntersectionNode(l1, l2)
	fmt.Println(res.Val)
}
```

### **[206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)**

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

<img src="./algorithm07.png" height={650} />

```jsx
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
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
 * @return {ListNode}
 */
var reverseList = function(head) {
   let pre = null,cur = head;
   if (head === null) return head
   while(cur){
       const next = cur.next
       cur.next = pre
       pre = cur
       cur = next
   }
   return pre;
};
```

- golang

```jsx
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    if head == nil||head.Next == nil {
        return head
    }
    var pre *ListNode = nil
    cur := head
    for cur !=nil {
        next := cur.Next
        cur.Next = pre
        pre = cur
        cur = next
    }
    return pre
}
```

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




### **[剑指 Offer 22. 链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)**

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 `6` 个节点，从头节点开始，它们的值依次是 `1、2、3、4、5、6`。这个链表的倒数第 `3` 个节点是值为 `4` 的节点。

```go
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

- javascript

```go
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let arr =[]
    while(head){
        arr.push(head)
        head = head.next
    }
    return arr[arr.length-k]
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
func getKthFromEnd(head *ListNode, k int) *ListNode {
       arr :=[]*ListNode{}
       for head!=nil{
           arr = append(arr,head)
           head = head.Next
       }
       return arr[len(arr)-k]
}
```