/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
    if (board === null || board.length === 0 || board[0].length === 0) return

    let m = board.length
    let n = board[0].length

    for (let row = 0; row < m; row++) {
        dfs(row, 0)
        dfs(row, n - 1)
    }

    for (let col = 0; col < n; col++) {
        dfs(0, col)
        dfs(m - 1, col)
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === 'A') {
                board[row][col] = 'O'
            } else if (board[row][col] === 'O') {
                board[row][col] = 'X'
            }
        }
    }

    function dfs(row, col) {
        console.log(row, col)
        if (row < 0 || row >= m || col < 0 || col >= n) return
        if (board[row][col] === 'X') return
        if (board[row][col] === 'A') return
        board[row][col] = 'A'

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)

    }

}
