var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] === nums[i]) return true
        }
    }
    return false
}

console.log(containsDuplicate([1, 2, 3]))