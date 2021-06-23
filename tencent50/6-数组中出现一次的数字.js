function singleNumber(nums) {

    let single = 0
    nums.forEach(num => {
        single ^= num
    })
    return single
}

console.log(singleNumber([1, 3, 3]))
