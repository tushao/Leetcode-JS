/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

//把数组分成两个数组(快慢指针)
function findMiddle(head) {
    var slow = head;
        var fast = head.next;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

//反转第二段链表
function reverse(head) {
    if (head === null) {
        return head;
    }
    var premNode = head;
    var nNode = premNode.next;
    head.next = null;
    while (nNode !== null) {
        var temp = nNode.next;
        nNode.next = premNode;
        premNode = nNode;
        nNode = temp
    }
    return premNode;
}

//两个list进行merge
function merge(head1, head2) {
    var index = 0;
    var dummyNode = new ListNode(0);
    while (head1 !== null && head2 !== null) {
        if (index % 2 === 0) {
            dummyNode.next = head1;
            head1 = head1.next;
        }
        else {
            dummyNode.next = head2;
            head2 = head2.next;
        }
        dummyNode = dummyNode.next;
        index++;
    }
    if (head1 !== null) {
        dummyNode.next = head1;
    }
    else {
        dummyNode.next = head2;
    }
}
// 主函数
var reorderList = function(head) {
    //very important!
    if (head === null || head.next === null) {
            return;
        }

        var mid = findMiddle(head);
        var tail = reverse(mid.next);
        mid.next = null;//very important!

        merge(head, tail);
    
};