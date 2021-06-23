// 假设存在链表 1→2→3→∅，我们想要把它改成 ∅←1←2←3。
const reverseList = function (head) {
    let prev = null, curr = head
    while (curr) {
        let tmp = curr.next    // 1. 临时存储当前指针后续内容

        curr.next = prev       // 2. 反转链表

        prev = curr            // 3. 接收反转结果

        curr = tmp             // 4. 接回临时存储的后续内容
    }
    return prev
}
