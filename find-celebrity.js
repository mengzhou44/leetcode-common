

function findCelebrity(graph) {
      if (graph === null || graph.length === 0)  return -1

      let m = graph.length
      let knowsCountArray = new Array(m).fill(0)
      let candidates = new Array(m). fill(true)
      for (let i=0; i<m; i++)  {
           for(let j=0; j<m; j++) {
                if (i === j)  continue
                if (graph[i][j] === 1) {
                     candidates[i] = false
                     knowsCountArray[j]++
                }
           }
      }

       for(let i=0; i<candidates.length; i++) {
           if (candidates[i] ===true && knowsCountArray[i] === m-1)  return i
       }

       return -1

}


// let graph =[
//     [1,1,0],
//     [0,1,0],
//     [1,1,1]
//   ]


let graph = [
    [1,0,1],
    [1,1,0],
    [0,1,1]
  ]
  console.log(findCelebrity(graph))