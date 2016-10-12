/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    return reverseListInt(head, null);
};

function reverseListInt(head, newHead) {
    if (head === null) {
        return newHead;
    }
    
    var next = head.next;
    head.next = newHead;
    return reverseListInt(next, head);
}
