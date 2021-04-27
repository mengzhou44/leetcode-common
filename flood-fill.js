/**
* @param {number[][]} image
* @param {number} sr
* @param {number} sc
* @param {number} newColor
* @return {number[][]}
*/
var floodFill = function (image, sr, sc, newColor) {

    let m = image.length
    let n = image[0].length

    let color = image[sr][sc]

    let pixels = []
    dfs(sr, sc)

    for (let [row, col] of pixels) {
        image[row][col] = newColor
    }

    return image

    function dfs(row, col, visited = new Set()) {
        if (row < 0 || row >= m || col < 0 || col >= n) return

        if (image[row][col] !== color) return

        if (visited.has(`${row},${col}`)) return

        visited.add(`${row},${col}`)

        pixels.push([row, col])

        dfs(row + 1, col, visited)
        dfs(row - 1, col, visited)
        dfs(row, col + 1, visited)
        dfs(row, col - 1, visited)

    }

};