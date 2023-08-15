### **[144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)**

`难度：简单`

给你二叉树的根节点 `root` ，返回它节点值的 **前序** **遍历。

<img src="../algorithm11.png" height={650} />

```jsx
输入：root = [1,null,2,3]
输出：[1,2,3]
```

- javascript

```jsx
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
var preorderTraversal = function(root) {
    let arr = []
    const dfs = (root) =>{
        if(!root) return []
        arr.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return arr;
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
func preorderTraversal(root *TreeNode) []int {
    arr := []int{}
    var dfs func(node *TreeNode)
    dfs = func(node *TreeNode){
        if node != nil {
          arr = append(arr,node.Val)
          dfs(node.Left)
          dfs(node.Right)
        }
    }
    dfs(root)
    return arr
}
```
