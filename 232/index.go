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
