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
