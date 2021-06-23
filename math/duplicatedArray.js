// 运用快慢指针，移除已排序的数组的重复项， 空间复杂度的O(1)
function removeDuplicates(nums) {
    var n = nums.length;
    if (n === 0) return 0;
    var slow = 0, fast = 1;
    while (fast < n) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            // 维护 nums[0..slow] 无重复
            nums[slow] = nums[fast];
        }
        fast++;
    }
    // 长度为索引 + 1
    return slow + 1;
}

var arr = [0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5]

var nonDuplicatedLength = removeDuplicates(arr);
arr = arr.slice(0, nonDuplicatedLength)
console.log(arr);