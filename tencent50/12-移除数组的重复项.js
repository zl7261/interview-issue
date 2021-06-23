const removeDuplicates = function (nums) {
    if (nums.length === 0) return 0

    let [noDuplicatedIndex, loopIndex] = [0, 0]

    while (loopIndex < nums.length) {
        if (nums[loopIndex] !== nums[noDuplicatedIndex]) {
            noDuplicatedIndex++
            nums[noDuplicatedIndex] = nums[loopIndex]
        }
        loopIndex++
    }

    // 返回duplicatedIndex对应的数组长度
    return noDuplicatedIndex + 1
}

let arr = [1, 2, 2, 3]
console.log(arr.slice(0, removeDuplicates(arr)))
