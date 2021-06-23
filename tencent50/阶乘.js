function 阶乘(n, result = 1) {
    if (n === 1) return result
    return 阶乘(n - 1, n * result)
}

console.log(阶乘(1));