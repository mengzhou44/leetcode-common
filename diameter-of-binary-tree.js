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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
       if (root === null)  return 0

       if (root.left === null && root.right === null)  return 0
       let res= Number.MIN_SAFE_INTEGER
       dfs(root)

       return res

       function dfs(current) {
             if (current === null)  return 0
             let left = 0
             if (current.left !== null)  {
                  left =  1+ dfs(current.left)
             }

             let right= 0
             if (current.right !== null)  {
                  right =  1+ dfs(current.right)
             }

             res= Math.max(res, left+right)

             return Math.max(left, right)
      }
};