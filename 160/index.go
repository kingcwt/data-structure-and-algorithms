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
