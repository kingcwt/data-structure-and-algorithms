package main

import "fmt"

func getKthFromEnd(head *ListNode, k int) *ListNode {
	arr := []*ListNode{}
	for head != nil {
		arr = append(arr, head)
		head = head.Next
	}
	return arr[len(arr)-k]
}

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {

	l1 := &ListNode{Val: 1}
	l1.Next = &ListNode{Val: 2}
	l1.Next.Next = &ListNode{Val: 3}
	l1.Next.Next.Next = &ListNode{Val: 4}
	l1.Next.Next.Next.Next = &ListNode{Val: 5}

	res := getKthFromEnd(l1, 2)

	for res != nil {
		fmt.Printf("%d ", res.Val)
		res = res.Next
	}
}
