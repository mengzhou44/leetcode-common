function convert(c1, c2) {
    let map = new Map()
    map.set('A', [{cur: 'B',  rate: .5} ])
    map.set('B', [{cur: 'C',  rate: 4}, { cur: 'D', rate: .25}])
    map.set('D', [{cur: 'E',  rate: 5}])


    let res = -1
    if (map.has(c1)) {
        dfs(c1, c2)
        return res
    } else  if (map.has(c2)) {
        dfs(c2, c1)
        return  1/res
    }
    return  -1

    function dfs(cur,  target, temp =1, visited = new Set() ) {
        visited.add(cur)

        if (!map.has(cur)) return
        let neighbours = map.get(cur)

        for(let nei of neighbours) {
             if (nei.cur === target) {
                  res= temp * nei.rate
                  break
             }
             if (!visited.has(nei.cur) ){
                  dfs(nei.cur, target,  temp* nei.rate, visited)
             }
        }

    }

}




