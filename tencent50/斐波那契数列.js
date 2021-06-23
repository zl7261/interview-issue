'use strict'

// 1. 最简单的斐波那契求值

function easyFibo(n) {
    if (n === 0) return 0
    if (n < 2) return 1
    return easyFibo(n - 2) + easyFibo(n - 1)
}

// 2. 重复使用上一次计算结果 从 fibo(1)开始,递增1
function recountFibo(n) {
    if (n === 0) return 0
    if (n <= 2) return 1

    let pre = 1, cur = 1
    let temp
    for (let i = 1; i < n - 1; i++) {
        temp = pre + cur
        pre = cur
        cur = temp
    }
    return temp
}

// 3. 使用数组缓存每一次的计算结果 从fibo(n)开始 递减1
let arrayCacheFibo = function () {
    let arr = [0, 1]
    return function (n) {
        let result = arr[n]
        if (typeof result !== 'number') {
            result = arrayCacheFibo(n - 1) + arrayCacheFibo(n - 2)
            arr[n] = result
        }
        return result
    }
}()


function fibRecursive(n, current = 0, next = 1) {
    if (n === 0) return 0
    if (n === 1) return next // return next
    return fibRecursive(n - 1, next, current + next)
}

for (let i = 0; i < 1000; i++) {
    console.log(arrayCacheFibo(i))
}
