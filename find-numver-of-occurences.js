function findOccurrences(nums, target) {
     let index1= search(true)
     let index2= search(false)

     return index2- index1 +1

     function  search(searchFirst) {
          let left = 0
          let right = nums.length -1
          let result = -1
           while(left<=right) {
                let mid = left+ Math.floor((right-left)/2)
                if (nums[mid] === target) {
                     result = mid
                     if (searchFirst === true) {
                         right = mid-1
                     } else {
                         left =mid+1
                     }
                } else if (nums[mid]> target) {
                      right--
                } else {
                    left++
                }
           }
           return result
     }

}

let nums = [1,2,2,2,4,7,7,9]
console.log(findOccurrences(nums, 2))

