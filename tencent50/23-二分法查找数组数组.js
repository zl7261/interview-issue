function binarySearch(arr, value) {
    let mid = arr.length >> 1
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        mid = (start + end) >> 1

        if (arr[mid] === value) {
            return mid
        }

        if (arr[mid] < value) {
            end = mid - 1
        }

        if (arr[mid] > value) {
            start = mid + 1
        }
    }

    return -1
}

console.log(binarySearch([3, 2, 1], 1))
