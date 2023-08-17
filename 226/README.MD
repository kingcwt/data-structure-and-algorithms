### **[226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)**

给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。

<img src="/algorithm13.png" height={650} />

```go
输入：root = [3,1,6]
输出：[3,6,1]
```

- typescript

```tsx
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null
    const middle = root.left
    root.left = root.right
    root.right = middle
    invertTree(root.left)
    invertTree(root.right)
    return root

};
```

- golang

```tsx
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
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
```