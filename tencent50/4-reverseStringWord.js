const reverseWords = function (str) {
    let arr = str.split('').reverse().join('')
    return arr.split(' ').reverse().join(' ')
}

console.log(console.log(reverseWords(`Let's take LeetCode contest`)))
