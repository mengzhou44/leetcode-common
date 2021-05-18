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
var verticalTraversal = function (root) {

    let map = new Map()
    dfs(root)

    let cols = Array.from(map.keys()).sort((a, b) => a - b)

    let res = []

    for (let col of cols) {
        let vals = map.get(col).map(item => item.val)
        res.push(vals)
    }

    return res

    function dfs(node, row = 0, col = 0) {
        if (node === null) return

        dfs(node.left, row + 1, col - 1)

        if (!map.has(col)) {
            map.set(col, [])
        }

        let arr = map.get(col)
        arr.push({ row: row, val: node.val })
        arr = arr.sort((a, b) => {
            let rowA = a.row
            let valA = a.val

            let rowB = b.row
            let valB = b.val

            if (rowA === rowB) return valA - valB

            if (rowA > rowB) return 1

            return -1
        })
        map.set(col, arr)

        dfs(node.right, row + 1, col + 1)

    }
};