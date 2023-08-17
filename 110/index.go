package main

import (
	"fmt"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
func getHeight(node *TreeNode) int {
	if node == nil {
		return 0
	}
	return max(getHeight(node.Left), getHeight(node.Right)) + 1
}
func abs(x int) int {
	if x < 0 {
		return -1 * x
	}
	return x
}
func isBalanced(root *TreeNode) bool {
	if root == nil {
		return true
	}

	return abs(getHeight(root.Left)-getHeight(root.Right)) <= 1 && isBalanced(root.Left) && isBalanced(root.Right)
}

func main() {
	root := &TreeNode{Val: 3}
	root.Left = &TreeNode{Val: 9}
	root.Right = &TreeNode{Val: 20}
	root.Right.Left = &TreeNode{Val: 15}
	root.Right.Right = &TreeNode{Val: 7}
	root.Right.Right.Left = &TreeNode{Val: 17}
	root.Right.Right.Right = &TreeNode{Val: 27}

	res := isBalanced(root)
	fmt.Println(res)
}
