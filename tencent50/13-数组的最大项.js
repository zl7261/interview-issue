const findMax = function (nums) {
    if (nums.length <= 0) return
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max
}

let arr = [1, 3, 2]
console.log(findMax(arr))