var swapPairs = function(head) {
if (head === null || head.next === null) {
        return head;
    }
    
    var n = head.next;
    head.next = swapPairs(head.next.next);
    n.next = head;
    return n;
};