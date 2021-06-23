/**
 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 n/2 的元素。

 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */
function maxRepeat(nums) {
    let n = nums.length
    if (n < 1) return 0
    if (n === 1) return nums[0]

    // 对数组进行排序
    nums.sort()
    let [max_count, count] = [1, 1]

    let repeatNum
    let currentNumber
    // 遍历数组找出出现次数最多的元素
    for (let i = 0; i < n; i++) {
        currentNumber = nums[i]
        if (nums[i] === nums[i + 1]) {
            count++
        } else {
            // 当i+1 !== i 时
            if (count > max_count) {
                // 更新max_count
                max_count = count
                // 重新计算count
                count = 1
                repeatNum = currentNumber
            }
        }
    }
    return repeatNum
}


console.log(maxRepeat([2, 2, 1, 1, 1, 2, 2]))