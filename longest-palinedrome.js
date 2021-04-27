/**
* @param {string} s
* @return {number}
*/
var longestPalindrome = function (s) {
    let map = new Map()
    let longestOdds = 0
    for (let ch of s) {
        if (!map.has(ch)) {
            map.set(ch, 1)
        } else {
            map.set(ch, map.get(ch) + 1)
        }
    }

    let res = 0
    let mark = 0
    for (let key of map.keys()) {
        if (map.get(key) % 2 === 0) {
            res += map.get(key)
        } else {
            mark = 1
            res += map.get(key) - 1
        }
    }

    return res + mark
};