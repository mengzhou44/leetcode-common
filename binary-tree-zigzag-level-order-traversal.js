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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root == null) return []

    let res = []
    let array = [root]
    let dir = 'LR'
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let level = []
        while (count < levelSize) {
            let node = array.shift()
            addToLevel(level, node.val)
            if (node.left !== null) {
                array.push(node.left)
            }
            if (node.right !== null) {
                array.push(node.right)
            }
            count++
        }

        res.push(level)
        dir = toggleDirection()
    }

    return res

    function addToLevel(level, val) {
        if (dir === 'LR') {
            level.push(val)
        } else {
            level.unshift(val)
        }
    }

    function toggleDirection() {
        if (dir === 'LR') return 'RL'

        return 'LR'
    }

};