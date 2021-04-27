/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {

    if (heights === null || heights.length === 0 || heights[0].length === 0) return []

    let m = heights.length
    let n = heights[0].length
    let pacific = new Array(m)
    let atlantic = new Array(m)
    for (let i = 0; i < m; i++) {
        pacific[i] = new Array(n).fill(false)
        atlantic[i] = new Array(n).fill(false)
    }

    for (let row = 0; row < m; row++) {
        dfs(pacific, row, 0)
    }

    for (let col = 0; col < n; col++) {
        dfs(pacific, 0, col)
    }

    for (let row = 0; row < m; row++) {
        dfs(atlantic, row, n - 1)
    }

    for (let col = 0; col < n; col++) {
        dfs(atlantic, m - 1, col)
    }

    let res = []
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (pacific[row][col] && atlantic[row][col]) {
                res.push([row, col])
            }
        }
    }

    return res


    function dfs(board, row, col, peviousHeight = null) {

        if (row < 0 || row >= m || col < 0 || col >= n) return
        if (board[row][col] === true) return


        if (peviousHeight !== null && heights[row][col] < peviousHeight) {
            return
        }

        board[row][col] = true

        dfs(board, row + 1, col, heights[row][col])
        dfs(board, row - 1, col, heights[row][col])
        dfs(board, row, col + 1, heights[row][col])
        dfs(board, row, col - 1, heights[row][col])
    }
};