/**
 *            1
 *          2   3
 *         4   5   6
 *           7  8
 * */
let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7,
                left: {
                    value: 9
                }
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

// 先序遍历
let preOrder = function () {
    let arr = []
    return function (node) {

        if (node) {
            arr.push(node.value)
            preOrder(node.left)
            preOrder(node.right)
        }
        return arr
    }
}()
// 中序遍历
let middleOrder = function () {
    let arr = []
    return function (node) {
        if (node) {
            middleOrder(node.left)
            arr.push(node.value)
            middleOrder(node.right)
        }
        return arr
    }
}()
// 后序遍历
let backOrder = function () {
    let arr = []
    return function (node) {
        if (node) {
            backOrder(node.left)
            backOrder(node.right)
            arr.push(node.value)
        }
        return arr
    }
}()

// 反转二叉树的左右节点
let reverseTree = function () {
    let arr = []
    return function (node) {
        if (node) {
            let temp = node.right
            node.right = node.left
            node.left = temp

            arr.push(node.value)
        }
        return arr
    }
}()


// 二叉树右视图
let viewRightTree = function (node) {
    let arr = []

    function dfs(node, depth = 0) {
        if (node == null) {
            return
        }
        // 如果当前节点所在深度还没有出现在res里，说明在该深度下当前节点是第一个被访问的节点，因此将当前节点加入res中。
        if (depth === arr.length) {
            arr.push(node.value)
        }
        depth++
        // 先访问 当前节点，再递归地访问 右子树 和 左子树。
        dfs(node.right, depth)
        dfs(node.left, depth)
    }

    dfs(node)
    return arr
}
// 二叉树右视图
let depthOfTree = function (node) {
    let loopedDepth = 0

    function treeDepth(node, depth = 0) {
        if (node == null) {
            return
        }
        // 如果当前节点所在深度还没有出现在res里，说明在该深度下当前节点是第一个被访问的节点，因此将当前节点加入res中

        if (depth === loopedDepth) {
            loopedDepth++
        }
        depth++
        // 先访问 当前节点，再递归地访问 左子树 右子树
        treeDepth(node.left, depth)
        treeDepth(node.right, depth)
    }

    treeDepth(node)
    return loopedDepth
}


console.log(preOrder(tree).toString())
console.log(middleOrder(tree).toString())
console.log(backOrder(tree).toString())
console.log(viewRightTree(tree))
console.log(depthOfTree(tree))