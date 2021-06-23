function romanToInt(romanStr) {
    let romanValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }


    let res = 0
    let length = romanStr.length
    for (let cur = 0; cur < length; cur++) {
        // curIndex不是结尾 并且 curIndex小于curIndex+1的值
        if (cur + 1 < length && romanValue[romanStr[cur]] < romanValue[romanStr[cur + 1]]) {
            res -= romanValue[romanStr[cur]]
        } else {
            res += romanValue[romanStr[cur]]
        }
    }
    return res
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('XIX'))
