function subsets(nums) {
    if (nums.length === 0) return []
    if (nums.length === 1) return [[], nums]
    let last = nums.pop()

    let prev = subsets(nums)
    let temp = prev.map(item => [...item, last])

    return [...prev, ...temp]

}