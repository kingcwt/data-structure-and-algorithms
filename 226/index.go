package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}
	m := root.Left
	root.Left = root.Right
	root.Right = m
	invertTree(root.Left)
	invertTree(root.Right)
	return root
}
