/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {

    if (root === null) return []

    dfs(root)

    let queue = [target]
    let visited = new Set()
    let levelDepth = 0
    while (queue.length > 0) {
        let levelSize = queue.length
        let level = []
        let count = 0

        while (count < levelSize) {
            let node = queue.shift()
            visited.add(node)
            level.push(node.val)
            if (node.parent !== null) {
                if (!visited.has(node.parent)) {
                    queue.push(node.parent)
                }
            }

            if (node.left !== null) {
                if (!visited.has(node.left)) {
                    queue.push(node.left)
                }
            }

            if (node.right !== null) {
                if (!visited.has(node.right)) {
                    queue.push(node.right)
                }
            }

            count++
        }

        levelDepth++
        if (levelDepth === k + 1) return level

    }

    return []

    function dfs(cur, parent = null) {
        if (cur === null) return
        cur.parent = parent

        dfs(cur.left, cur)
        dfs(cur.right, cur)
    }

};