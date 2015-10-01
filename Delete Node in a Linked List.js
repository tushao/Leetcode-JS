/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 //这道题也很特么坑爹。一直在想不知道前置指针的情况下如何删除。看了网上的解释才知道原来是把两个数字交换过来。
 //那不废话么肯定不能删除最后一个啊。
var deleteNode = function(node) {
    var temp;
    temp = node.next.val;
    node.next.val = node.val;
    node.val = temp;
    node.next = node.next.next;
    
    
};