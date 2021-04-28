/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length
    let n = grid[0].length

    let dp = new Array(m + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }
    let sum = 0
    for (let i = 1; i < dp.length; i++) {
        sum += grid[i - 1][0]
        dp[i][1] = sum
    }

    sum = 0
    for (let j = 1; j < dp[0].length; j++) {
        sum += grid[0][j - 1]
        dp[1][j] = sum
    }


    for (let row = 2; row < dp.length; row++) {
        for (let col = 2; col < dp[0].length; col++) {
            dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1])
                + grid[row - 1][col - 1]
        }
    }

    return dp[m][n]
};