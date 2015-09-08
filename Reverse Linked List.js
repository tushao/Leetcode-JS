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
    if(head === null) {
        return null;
    }
    
    // var dummyNode = new ListNode(0);
    // dummyNode.next = head;
    // head = dummyNode;
    
    var premNode = head;
    var nNode = premNode.next;
    head.next = null;
    while(nNode !== null) {
        var temp = nNode.next;
        nNode.next = premNode;
        premNode = nNode;
        nNode = temp
    }
    return premNode;
    
};
//三个指针反转链表