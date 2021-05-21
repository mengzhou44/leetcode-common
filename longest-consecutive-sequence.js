/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0

    let numsSet = new Set()

    for (let num of nums) {
        numsSet.add(num)
    }

    let max = Number.MIN_SAFE_INTEGER
    for (let num of nums) {
        if (!numsSet.has(num)) continue

        let left = num - 1
        while (numsSet.has(left)) {
            numsSet.delete(left)
            left--
        }
        left++


        let right = num + 1
        while (numsSet.has(right)) {
            numsSet.delete(right)
            right++
        }
        right--

        max = Math.max(max, right - left + 1)
    }

    return max
};