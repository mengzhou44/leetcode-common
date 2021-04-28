function  wallsAndGates(rooms) {
      if (rooms === null || rooms.length === 0 || rooms[0].length === 0)   return

      let m = rooms.length
      let n = rooms[0].length

      for(let row=0; row<m; row++ ) {
           for(let col = 0; col<n; col++)  {
                if (rooms[row][col] === '0') {
                     dfs(row, col)
                }
           }
       }

       console.log(rooms)

       function dfs(row, col, count = 0,   visited = new Set()) {
           if (row<0 || row>=m || col <0 || col>=n)   return

           if (rooms[row][col] === '-1') return

           if (visited.has(`${row},${col}`)) return
            visited.add(`${row},${col}`)

            if (rooms[row][col] === 'INF') {
                 rooms[row][col] = count
            } else  if (rooms[row][col] !== '0') {
                 rooms[row][col] = Math.min(rooms[row][col], count)
            }

            dfs(row+1, col, count+1, visited)
            dfs(row-1, col, count+1, visited)
            dfs(row, col+1, count+1, visited)
            dfs(row, col-1, count+1, visited)
       }

}



let rooms = [
    ['INF', '-1', '0', 'INF'],
    ['INF', 'INF', 'INF', '-1'],
    ['INF', '-1', 'INF', '-1'],
    ['0', '-1', 'INF', 'INF']
]

// 3  -1   0   1
// 2   2   1  -1
// 1  -1   2  -1
// 0  -1   3   4

wallsAndGates(rooms)
