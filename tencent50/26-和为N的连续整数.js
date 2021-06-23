function getSumNumber(n) {
    if (n === 1) return [[1]]
    if (n === 2) return [[1, 2]]
    let result = []
    let start, end, mid, sum
    mid = n >> 1
    start = 1
    end = 2
    sum = 3
    while (start <= mid) {
        if (sum < n) {
            end++
            sum += end
        } else if (sum > n) {
            sum -= start
            start++
        } else {
            let arr = []

            for (let i = start; i < end + 1; i++) {
                arr.push(i)
            }

            result.push(arr)

            sum = sum - start
            start++
            end++
            sum = sum + end
        }
    }
    return result
}


console.log(getSumNumber(9))