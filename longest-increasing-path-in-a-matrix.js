/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    if (matrix === null ||
        matrix.length === 0 ||
        matrix[0].length === 0)

        return 0

    let moves = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    let m = matrix.length
    let n = matrix[0].length

    let memo = new Array(m)
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(null)
    }

    let max = Number.MIN_SAFE_INTEGER

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            max = Math.max(dfs(row, col), max)
        }
    }

    return max


    function dfs(row, col) {

        if (memo[row][col] !== null) return memo[row][col]

        let res = 1

        for (let move of moves) {
            let nextRow = row + move[0]
            let nextCol = col + move[1]

            if (isValid(nextRow, nextCol) &&
                matrix[row][col] < matrix[nextRow][nextCol]) {
                res = Math.max(res, 1 + dfs(nextRow, nextCol))
            }
        }

        memo[row][col] = res

        return res
    }


    function isValid(row, col) {
        return row >= 0 && row < m && col >= 0 && col < n
    }
};