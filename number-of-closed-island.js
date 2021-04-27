/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {

    let m = grid.length
    let n = grid[0].length

    let count = 0
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 0) {
                if (bfs(row, col)) {
                    count++
                }
            }
        }
    }

    return count

    function bfs(row, col) {
        let array = [{ row, col }]
        let isClosed = true
        while (array.length > 0) {
            let node = array.shift()

            grid[node.row][node.col] = 1

            if (node.row === 0 || node.row === m - 1 ||
                node.col === 0 || node.col === n - 1) {
                isClosed = false
            }

            if (isInBound(node.row + 1, node.col) && grid[node.row + 1][node.col] === 0) {
                array.push({ row: node.row + 1, col: node.col })
            }

            if (isInBound(node.row - 1, node.col) && grid[node.row - 1][node.col] === 0) {
                array.push({ row: node.row - 1, col: node.col })
            }

            if (isInBound(node.row, node.col + 1) && grid[node.row][node.col + 1] === 0) {
                array.push({ row: node.row, col: node.col + 1 })
            }

            if (isInBound(node.row, node.col - 1) && grid[node.row][node.col - 1] === 0) {
                array.push({ row: node.row, col: node.col - 1 })
            }
        }

        return isClosed
    }

    function isInBound(row, col) {
        return row >= 0 && row < m && col >= 0 && col < n
    }

};