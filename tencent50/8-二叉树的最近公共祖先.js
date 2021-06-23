// 二叉搜索树：左子节点 < 根节点 < 右子节点，root 一定是 p q 根节点的可能：
// p左 q右：p < root < q
// p右 q左：q < root < p
// q是p根节点：p < q = root
// p是q根节点：q < p = root
// p和q互为根节点（同节点）：p = q = root
// 上面5条件合二：
// q <= root <= p
// p <= root <= q
// 递归：遍历每个节点，只要满足上面两条件之一，则该节点一定是 p 和 q 的 最近根节点


const lowestCommonAncestor = function (root, p, q) {
    let leftRoot = p.val <= root.val && root.val <= q.val
    let rightRoot = q.val <= root.val && root.val <= p.val
    let nexRoot = p.val < root.val && root.left || root.right
    return (leftRoot || rightRoot) && root || lowestCommonAncestor(nexRoot, p, q)
}
