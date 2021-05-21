/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    let stack = []
    let arr = new Array(n).fill(0)
    let usedSlots = []

    for (let log of logs) {
        let { id, status, ts } = parseLog(log)

        if (status === 'start') {
            stack.push({ id, status, ts })
        } else {
            let prev = stack.pop()

            let et = getExclusiveTimes(prev.ts, ts)

            usedSlots.push([prev.ts, ts])

            arr[id] += et
        }
    }

    return arr

    function getExclusiveTimes(start, end) {

        let count = 0
        let cur = start
        while (cur <= end) {
            if (!isInUsedSlots(cur)) {
                count++
            }
            cur++
        }

        return count
    }

    function isInUsedSlots(time) {
        for (let [start, end] of usedSlots) {
            if (time >= start && time <= end) {
                return true
            }
        }
        return false
    }

    function parseLog(log) {
        let temp = log.split(':')
        return {
            id: parseInt(temp[0]),
            status: temp[1],
            ts: parseInt(temp[2])
        }
    }
};