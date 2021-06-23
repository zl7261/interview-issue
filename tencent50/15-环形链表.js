function hasCycle(node) {
    if (node === null || node.next === null) {
        return false
    }

    let slow = node, fast = node.next

    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    return true
}