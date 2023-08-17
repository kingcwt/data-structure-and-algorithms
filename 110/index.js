/**
 *  输入：root = [3,9,20,null,null,15,7]
    输出：true
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    if(!root) return true
    const height = (node) =>{
        if(!node) return 0
        return Math.max(height(node.left),height(node.right))+1
    }
    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
    }


let l = new TreeNode(3)
l.left = new TreeNode(9)
l.right = new TreeNode(20)
l.right.left = new TreeNode(15)
l.right.right = new TreeNode(7)
l.right.right.left = new TreeNode(17)
l.right.right.right = new TreeNode(170)

console.log(isBalanced(l),'lll')