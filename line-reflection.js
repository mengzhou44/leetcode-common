/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function (points) {
    if (points.length < 2) return true

    let leftX = Number.MAX_SAFE_INTEGER
    let rightX = Number.MIN_SAFE_INTEGER

    for (let [x, y] of points) {
        leftX = Math.min(x, leftX)
        rightX = Math.max(x, rightX)
    }

    if (leftX === rightX) return true

    let midX = (leftX + rightX) / 2

    let left = new Set()
    let right = new Set()
    for (let [x, y] of points) {
        if (x < midX) {
            left.add(`${x},${y}`)
        } else if (x > midX) {
            right.add(`${x},${y}`)
        }
    }

    if (left.size !== right.size) return false


    for (let point of left.keys()) {
        let [lx, ly] = parsePoint(point)
        let x = 2 * midX - lx

        if (!right.has(`${x},${ly}`)) {
            return false
        }
    }


    return true

    function parsePoint(point) {
        return point.split(',').map(item => parseInt(item))
    }

};