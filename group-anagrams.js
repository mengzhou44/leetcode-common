/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    let map = new Map()

    for (let str of strs) {
        let key = createKey(str)
        if (!map.has(key)) {
            map.set(key, [str])
        } else {
            map.get(key).push(str)
        }
    }

    let res = []
    for (let key of map.keys()) {
        res.push(map.get(key))
    }

    return res

    function createKey(str) {
        let array = str.split('')
        let sorted = array.sort((a, b) => {
            if (a > b) return 1
            if (a < b) return -1
            return 0
        })

        return sorted.join('')
    }
};