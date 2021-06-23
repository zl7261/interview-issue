function twoSumNoCache(nums, target) {
    let length = nums.length
    let result = []
    if (nums.length < 2) {
        return result
    }

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

function twoSumWithCache(nums, target) {
    // 缓存
    let cache = {}

    for (let i = 0; i < nums.length; i++) {
        // 当前元素
        let cur = nums[i]
        // 当前元素之前的元素=target-当前元素
        let other = target - cur
        // cache[other]
        let cacheOther = cache[other]
        if (cacheOther !== undefined) {   // 如果存在，直接返回 [目标元素的索引,当前索引]
            return [cacheOther, i];
        } else {                              // 如果不存在，说明之前没出现过目标元素
            cache[cur] = i;               // 存入当前的元素和对应的索引
        }
    }
}

console.log(twoSumNoCache([3, 2, 4], 6))
console.log(twoSumWithCache([3, 4, 4], 7))
