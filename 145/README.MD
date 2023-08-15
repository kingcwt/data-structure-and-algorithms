### **[145. 二叉树的后序遍历](https://leetcode.cn/problems/binary-tree-postorder-traversal/)**

`难度：简单`

给你一棵二叉树的根节点 `root` ，返回其节点值的 **后序遍历** 。

<img src="../algorithm11.png" height={650} />

```go
输入：root = [1,null,2,3]
输出：[3,2,1]
```

- javascript

```go
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let arr =[]

    const dfs = (root) =>{
        if(!root) return []
        dfs(root.left)
        dfs(root.right)
        arr.push(root.val)
    }

    dfs(root)
    return arr
};
```

- golang

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
    arr := []int{}
    var dfs func(node *TreeNode)
    dfs = func(node *TreeNode) {
        if node !=nil {
            dfs(node.Left)
            dfs(node.Right)
            arr = append(arr,node.Val)
        }
    }

    dfs(root)
    return arr
}
```