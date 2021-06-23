function bubbleSort(arr) {
    if (arr.length < 2) return arr
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function insertSort(arr) {
    if (arr.length < 2) return arr
    for (let i = 1; i < arr.length; i++) {
        let pre = i - 1
        let curVal = arr[i]
        while (arr[pre] > curVal) {
            arr[pre + 1] = arr[pre]
            pre--
        }
        arr[pre + 1] = curVal
    }
    return arr
}

function quickSort(arr) {
    if (arr.length < 2) return arr
    let pivot = arr[0]
    let bigArr = [], littleArr = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            bigArr.push(arr[i])
        } else {
            littleArr.push(arr[i])
        }
    }
    return quickSort(littleArr).concat(pivot, quickSort(bigArr))
}

function merge(left, right) {
    let result=[]
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift())
        } else {
            result.push(left.shift())
        }
    }
    return result.concat(left,right)
}

function mergeSort(arr) {
    if (arr.length < 2) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let arr
arr = []

for (let i = 0; i < 100; i++) { //initialize a random integer unsorted array
    arr.push(getRandomInt(1, 100))
}

console.log(bubbleSort(arr))

arr = []

for (let i = 0; i < 100; i++) { //initialize a random integer unsorted array
    arr.push(getRandomInt(1, 100))
}

console.log(insertSort(arr))

arr = []

for (let i = 0; i < 100; i++) { //initialize a random integer unsorted array
    arr.push(getRandomInt(1, 100))
}

console.log(quickSort(arr))


arr = []

for (let i = 0; i < 100; i++) { //initialize a random integer unsorted array
    arr.push(getRandomInt(1, 100))
}

console.log(mergeSort(arr))
