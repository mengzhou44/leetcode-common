/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {

    let sorted = [...words].sort((word1, word2) => compare(word1, word2))

    for (let i = 0; i < words.length; i++) {
        console.log(words[i], sorted[i])
        if (words[i] !== sorted[i]) return false
    }

    return true

    function compare(word1, word2) {

        let minLength = Math.min(word1.length, word2.length)
        for (let i = 0; i < minLength; i++) {
            if (word1[i] !== word2[i]) {
                let index1 = order.indexOf(word1[i])
                let index2 = order.indexOf(word2[i])

                if (index1 < index2) return -1
                return 1
            }
        }
        if (word1.length === word2.length) return 0

        if (word1.length === minLength) return -1

        return 1
    }
};