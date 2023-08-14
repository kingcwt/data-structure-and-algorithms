### **[232. 用栈实现队列](https://leetcode.cn/problems/implement-queue-using-stacks/)**
`难度：简单`  

请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（`push`、`pop`、`peek`、`empty`）：

实现 `MyQueue` 类：

- `void push(int x)` 将元素 x 推到队列的末尾
- `int pop()` 从队列的开头移除并返回元素
- `int peek()` 返回队列开头的元素
- `boolean empty()` 如果队列为空，返回 `true` ；否则，返回 `false`

**说明：**

- 你 **只能** 使用标准的栈操作 —— 也就是只有 `push to top`, `peek/pop from top`, `size`, 和 `is empty` 操作是合法的。
- 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。

**示例 1：**

```jsx
输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

- javascritpt

```jsx
var MyQueue = function() {
    this.InStack = []
    this.OutStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.InStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
     if(!this.OutStack.length){
         this.toOutStack()
     }
     return this.OutStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.OutStack.length){
        this.toOutStack()
    }
    return this.OutStack[this.OutStack.length-1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.OutStack.length ===0 && this.InStack.length === 0
};

MyQueue.prototype.toOutStack = function(){
         while(this.InStack.length){
             this.OutStack.push(this.InStack.pop())
         }
}
```

- golang

```go
type MyQueue struct {
    inStack,outStack []int
}

func Constructor() MyQueue {
    return MyQueue{}
}

func (this *MyQueue) Push(x int)  {
    this.inStack = append(this.inStack,x)
}

func (this *MyQueue) Pop() int {
    if len(this.outStack) == 0 {
        this.ToOutStack()
    }
    x := this.outStack[len(this.outStack)-1]
    this.outStack = this.outStack[:len(this.outStack)-1]
    return x
}

func (this *MyQueue) Peek() int {
    if len(this.outStack) == 0 {
        this.ToOutStack()
    }
    return this.outStack[len(this.outStack)-1]
}

func (this *MyQueue) Empty() bool {
    return len(this.inStack) == 0 && len(this.outStack) == 0
}

func (this *MyQueue) ToOutStack()  {
     for len(this.inStack) > 0 {
         this.outStack = append(this.outStack,this.inStack[len(this.inStack)-1])
         this.inStack = this.inStack[:len(this.inStack)-1]
     }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */

-- local

package main

import "fmt"

type MyQueue struct {
	InStack  []int
	OutStack []int
}

func Constructor() MyQueue {
	return MyQueue{}
}

func (this *MyQueue) Push(x int) {
	this.InStack = append(this.InStack, x)
}

func (this *MyQueue) Pop() int {
	if len(this.OutStack) == 0 {
		this.ToOutStack()
	}

	index := len(this.OutStack) - 1
	deletedElement := this.OutStack[index]
	this.OutStack = append(this.OutStack[:index], this.OutStack[index+1:]...)
	return deletedElement
}

func (this *MyQueue) Peek() int {
	if len(this.OutStack) == 0 {
		this.ToOutStack()
	}
	return this.OutStack[len(this.OutStack)-1]
}

func (this *MyQueue) Empty() bool {
	return len(this.InStack) == 0 && len(this.OutStack) == 0
}

func (this *MyQueue) ToOutStack() {
	for len(this.InStack) > 0 {
		endIndex := len(this.InStack) - 1
		endVal := this.InStack[endIndex]
		this.InStack = append(this.InStack[:endIndex], this.InStack[endIndex+1:]...)
		this.OutStack = append(this.OutStack, endVal)
	}
}

func main() {
	m := Constructor()
	m.Push(1)
	m.Push(2)
	m.Pop()
	fmt.Printf("InStack=%d --- OutStack=%d\n", m.InStack, m.OutStack)
}
```
