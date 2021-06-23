function isChildrenArr(parent, child) {
    let parentLength = parent.length
    if (parentLength < 1) {
        return false
    }
    let childLength = child.length
    if (childLength < 1) {
        return true
    }
    if (childLength > parentLength) return false
    let parentLoopIndex = 0
    let childIsSame = 0
    while (parentLoopIndex < parentLength) {
        if (parent[parentLoopIndex] > child[childIsSame]) {
            return childIsSame === childLength
        }

        if (parent[parentLoopIndex] === child[childIsSame]) {
            childIsSame++
        }
        parentLoopIndex++
    }

    return childIsSame === childLength
}

console.log(isChildrenArr([1, 2, 3, 4, 5, 6], [2, 3, 4]))
