function ListNode(val) {
    this.val = val;
    this.next = null;
}

/* 删除当前链表的节点*/
const deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
};