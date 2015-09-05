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
    for(i = m; i < n; i++) {//带有返回值的函数:在使用 return 语句时，函数会停止执行，并返回指定的值。
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

//“===”首先计算其操作数的值，然后比较这两个值，比较过程没有任何类型转换
//相等运算符“==”如果两个操作数不是同一类型，那么相等运算符会尝试一些类型转换，然后进行比较