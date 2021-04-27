class NumArray {
    constructor(nums) {
        this.nums = nums
        this.sumArray = this.createSumArray(nums)
    }

    createSumArray(nums) {
        let sum = 0
        let res = []
        for (let num of nums) {
            sum += num
            res.push(sum)
        }
        return res
    }


    sumRange(left, right) {
        return this.sumArray[right] - this.sumArray[left] + this.nums[left]
    }
}

