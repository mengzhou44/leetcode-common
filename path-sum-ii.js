var pathSum = function (root, targetSum) {
    if (root === null) return []

    let res = []
    dfs(root, targetSum)

    return res

    function dfs(node, sum, path = []) {
        if (node === null) return
        path.push(node.val)
        if (node.left === null && node.right === null) {
            if (node.val === sum) {
                res.push(path)
            }
        }

        dfs(node.left, sum - node.val, [...path])
        dfs(node.right, sum - node.val, [...path])
    }

};