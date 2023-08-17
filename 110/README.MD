### **[110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)**

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过 1 。

<img src="/algorithm12.png" height={650} />

```go
输入：root = [3,9,20,null,null,15,7]
输出：true
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

function isBalanced(root: TreeNode | null): boolean {
     if(!root) return true
  
     const getHeight = (node:TreeNode):number =>{
         if(!node) return 0
         return Math.max(getHeight(node.left),getHeight(node.right)) +1
     }
     return Math.abs(getHeight(root.left)-getHeight(root.right)) <=1 && isBalanced(root.left) && isBalanced(root.right)
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
func getAbs (a int) int{
    if a < 0 {
        return -1 * a
    }
    return a
}
func getMax (x,y int)int {
    if x > y {
        return x
    }
    return y
}
func getHeight (node *TreeNode) int {
     if node == nil {
         return 0
     }
     return getMax(getHeight(node.Left),getHeight(node.Right)) + 1
}
func isBalanced(root *TreeNode) bool {
    if root == nil {
        return true
    }

    return getAbs(getHeight(root.Left) - getHeight(root.Right)) <=1 && isBalanced(root.Left) && isBalanced(root.Right)

}
```