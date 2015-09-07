/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head === null) {
        return null;
    }
    
    var leftDummy = new ListNode(0);
    var rightDummy = new ListNode(0);
    var left = leftDummy;
    var right = rightDummy;
    
    while(head !== null) {
        if(head.val < x) {
            left.next = head;
            left = left.next;
        }
        else {
            right.next = head;
            right = right.next;
        }
        head = head.next;
    }
    
    right.next = null;
    left.next = rightDummy.next;
    
    return leftDummy.next;
};

//双链表典型例题