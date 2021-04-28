/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let map = new Map()
    let indegree = new Array(numCourses).fill(0)

    for (let [toTake, preq] of prerequisites) {
        indegree[toTake]++
        if (!map.has(preq)) {
            map.set(preq, [toTake])
        } else {
            map.get(preq).push(toTake)
        }
    }

    let queue = []
    for (let course = 0; course < numCourses; course++) {
        if (indegree[course] === 0) {
            queue.push(course)
        }
    }

    let order = []
    while (queue.length > 0) {
        let course = queue.shift()
        order.push(course)
        if (map.has(course)) {
            for (let c of map.get(course)) {
                indegree[c]--
                if (indegree[c] === 0) {
                    queue.push(c)
                }
            }
        }

    }

    return order.length === numCourses
};