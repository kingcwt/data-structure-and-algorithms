function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
   if(!root) return true
   const dfs = (left,right) =>{
       if(left===null&&right !==null) return false
       else if(left!==null&&right===null) return false
       else if(left===null && right === null) return true
       else if(left.val !== right.val) return false
       let isTrue = dfs(left.left,right.right) && dfs(left.right,right.left)
       return isTrue
   }
   return dfs(root.left,root.right)
};

let node = new TreeNode(1)
node.left = new TreeNode(2)
node.right = new TreeNode(2)
node.left.left =new TreeNode(3)
node.left.right = new TreeNode(4)
node.right.left = new TreeNode(4)
node.right.right = new TreeNode(3)
console.log(isSymmetric(node))
