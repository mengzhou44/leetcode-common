/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    let table = new Array(26).fill(0)

    if (s.length !== t.length) return false

    for (let ch of s) {
        let index = getIndex(ch)
        table[index]++
    }

    for (let ch of t) {
        let index = getIndex(ch)
        table[index]--
        if (table[index] < 0) return false
    }

    return true

    function getIndex(ch) {
        return ch.charCodeAt(0) - 'a'.charCodeAt(0)
    }

};
