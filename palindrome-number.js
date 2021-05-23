/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let original = x
    if (x < 0) return false
    let res = 0
    while (x > 0) {
        res = 10 * res + x % 10
        x = Math.floor(x / 10)
    }

    return res === original

};