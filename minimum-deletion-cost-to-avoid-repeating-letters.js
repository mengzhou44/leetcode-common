/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {

    if (s.length === 1) return cost[0]

    let cur = 1

    let prev = 0

    let minCost = 0
    while (cur < s.length) {

        if (s[cur] !== s[prev]) {
            prev = cur
            cur++
        } else {
            let max = cost[prev]
            let total = cost[prev]
            while (s[cur] === s[prev]) {
                max = Math.max(max, cost[cur])
                total += cost[cur]
                cur++
            }
            minCost += total - max
            prev = cur
            cur++
        }
    }

    return minCost


};