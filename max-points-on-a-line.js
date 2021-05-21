/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    if (points.length < 3) return points.length
    let n = points.length
    let visited = new Set()
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
        if (visited.has(`${points[i][0]}-${points[i][1]}`)) {
            continue
        }
        let same = 0
        let map = new Map()
        let localMax = 1
        for (let j = i + 1; j < n; j++) {
            if (isSame(i, j)) {
                same++
            } else {
                let slope = getSlope(i, j)

                if (!map.has(slope)) {
                    map.set(slope, 2)
                } else {
                    map.set(slope, map.get(slope) + 1)
                }
                localMax = Math.max(localMax, map.get(slope))
            }
        }

        max = Math.max(max, localMax + same)

        visited.add(`${points[i][0]}-${points[i][1]}`)

    }

    return max

    function isSame(i, j) {
        return points[i][0] === points[j][0] &&
            points[i][1] === points[j][1]
    }

    function getSlope(i, j) {
        if (points[i][0] === points[j][0]) return Number.MAX_SAFE_INTEGER

        if (points[i][1] === points[j][1]) return 0

        return (points[i][1] - points[j][1]) / (points[i][0] - points[j][0])
    }

};