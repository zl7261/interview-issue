function climbStairs(n) {
    // 上上个楼梯解法总和
    let lastSolution = 0
    // 上个楼梯解法总和
    let lastLastSolution = 0
    // 当前楼梯的解法综合
    let currentIndexSolution = 1

    for (let i = 1; i <= n; i++) {
        lastLastSolution = lastSolution
        lastSolution = currentIndexSolution
        currentIndexSolution = lastLastSolution + lastSolution
    }
    return currentIndexSolution
}

console.log(climbStairs(2))



