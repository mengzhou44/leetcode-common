// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function(nums) {
//     let maxToCur = 1
//     let minToCur = 1

//     let max = Number.MIN_SAFE_INTEGER
//     for(let i=0; i<nums.length; i++) {

//         let prevMaxToCur = maxToCur
//         let prevMinToCur = minToCur
//          maxToCur = Math.max(prevMaxToCur*nums[i],nums[i] ,prevMinToCur*nums[i])
//          minToCur = Math.min(prevMaxToCur*nums[i],nums[i] ,prevMinToCur*nums[i])
//          max = Math.max(max,  maxToCur)

//     }

//     return max

// };



var minProduct = function (nums) {
    let maxToCur = 1
    let minToCur = 1

    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {

        let prevMaxToCur = maxToCur
        let prevMinToCur = minToCur
        maxToCur = Math.max(prevMaxToCur * nums[i], nums[i], prevMinToCur * nums[i])
        minToCur = Math.min(prevMaxToCur * nums[i], nums[i], prevMinToCur * nums[i])
        min = Math.min(min, minToCur)

    }

    return min
};


console.log(minProduct([-2, 0, -1]))