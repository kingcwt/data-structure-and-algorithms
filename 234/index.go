package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func isPalindrome(head *ListNode) bool {

	arr := []int{}
	for head != nil {
		arr = append(arr, head.Val)
		head = head.Next
	}
	for i := 0; i < len(arr); i++ {
		if arr[i] != arr[len(arr)-1-i] {
			return false
		}
	}
	return true
}

func main() {

	list := &ListNode{Val: 1}
	list.Next = &ListNode{Val: 2}
	list.Next.Next = &ListNode{Val: 3}
	list.Next.Next.Next = &ListNode{Val: 1}

	v := isPalindrome(list)
	fmt.Println(v)
}
