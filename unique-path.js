/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    let dp = new Array(m + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }

    for (let col = 1; col < dp[0].length; col++) {
        dp[1][col] = 1
    }

    for (let row = 1; row < dp.length; row++) {
        dp[row][1] = 1
    }

    for (let row = 2; row < dp.length; row++) {
        for (let col = 2; col < dp[0].length; col++) {
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
        }
    }

    return dp[m][n]
};
