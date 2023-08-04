package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

//  输入：head = [3,2,0,-4], pos = 1

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

	for b != nil && b.Next != nil {
		a = a.Next
		b = b.Next.Next
		if a == b {
			return true
		}
	}
	return false
}

func main() {
	list := &ListNode{Val: 3}
	list.Next = &ListNode{Val: 2}
	list.Next.Next = &ListNode{Val: 0}
	list.Next.Next.Next = &ListNode{Val: -4}
	result := hasCycle(list)
	fmt.Println(result)
}
