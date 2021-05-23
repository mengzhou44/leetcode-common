class SparseVector {

    constructor(nums) {
        this.nums = nums
    }



    dotProduct(v2) {
        let sum = 0
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] !== 0 && v2.nums[i] !== 0) {
                sum += this.nums[i] * v2.nums[i]
            }
        }

        return sum

    }

}

