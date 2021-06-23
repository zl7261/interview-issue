const reverseString = function (s) {
    let length = s.length;
    let left = 0
    let right = length - 1;
    let temp
    // 只需遍历一半的数据
    while (left < right) {
        //  交换 left 与 right
        temp = s[left]
        s[left] = s[right]
        s[right] = temp

        // 解构赋值
        // [s[left], s[right]] = [s[right], s[left]];

        left++
        right--
    }
    return s
};

console.log(reverseString('hello'.split('')));