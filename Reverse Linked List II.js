/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m >= n || head === null) {
        return head;
    }
    
    var dummy = new ListNode(0);
    dummy.next = head;
    head = dummy;
    
    for (var i = 1; i < m; i++) {
            if (head === null) {//差点写错了
                return null;
            }
            head = head.next;
        }
    
    var premNode = head;
    var mNode = head.next;
    var nNode = mNode;
    var postnNode = mNode.next;
    for(i = m; i < n; i++) {//研究下这里为什么这么写
        if (postnNode === null) {
            return null;
        }
        var temp = postnNode.next;
        postnNode.next = nNode;
        nNode = postnNode;
        postnNode = temp;
    }
    mNode.next = postnNode;
    premNode.next = nNode;
    
    return dummy.next;
    
};