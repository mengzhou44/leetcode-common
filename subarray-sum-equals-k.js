/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    let map = new Map()
    map.set(0, 1)
    let res = 0
    let sum = 0
    for (let num of nums) {
        sum += num
        if (map.has(sum - k)) {
            res += map.get(sum - k)
        }

        if (!map.has(sum)) {
            map.set(sum, 1)
        } else {
            map.set(sum, map.get(sum) + 1)
        }
    }

    return res


};