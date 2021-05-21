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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let array = []
    let res = true
    dfs(root)

    return res

    function dfs(node) {
        if (node === null) return
        dfs(node.left)

        if (array.length > 0) {
            if (array[array.length - 1] >= node.val) {
                res = false
                return
            }
        }

        array.push(node.val)
        dfs(node.right)
    }
};


var isValidBST = function(root) {
    if (root === null)  return true

    return dfs(root)

    function dfs(node, min=Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
         if (node === null)  return true
         if (node.val<=min || node.val >= max)  return false
         return dfs(node.left, min, node.val)  &&
                dfs(node.right, node.val, max)

    }

}


