/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = new Map()
    for (let ch of arr) {
        if (!map.has(ch)) {
            map.set(ch, 0)
        }

        map.set(ch, map.get(ch) + 1)
    }

    let temp = Array.from(map.values())
    temp = temp.sort((a, b) => a - b)
    if (temp.length < 2) return true

    for (let i = 1; i < temp.length; i++) {
        if (temp[i] === temp[i - 1]) return false
    }

    return true

};