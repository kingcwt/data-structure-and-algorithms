package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func getMax(x, y int) int {
	if x > y {
		return x
	}
	return y
}
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return getMax(maxDepth(root.Left), maxDepth(root.Right)) + 1
}
