### **[104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)**

给定一个二叉树 `root` ，返回其最大深度。

二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。

<img src="/algorithm12.png" height={650} />

```go
输入：root = [3,9,20,null,null,15,7]
输出：3
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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
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
func getMax (x,y int) int {
    if x > y {
        return x
    }
    return y
}
func maxDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    return getMax(maxDepth(root.Left),maxDepth(root.Right)) + 1
}
```