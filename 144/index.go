package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func preorderTraversal(root *TreeNode) []int {
	arr := []int{}
	var dfs func(*TreeNode)
	dfs = func(node *TreeNode) {
		if node != nil {
			arr = append(arr, node.Val)
			dfs(node.Left)
			dfs(node.Right)
		}

	}
	dfs(root)
	return arr
}

func main() {
	root := &TreeNode{Val: 1}
	root.Right = &TreeNode{Val: 2}
	root.Right.Left = &TreeNode{Val: 3}
	res := preorderTraversal(root)
	fmt.Println(res)
}
