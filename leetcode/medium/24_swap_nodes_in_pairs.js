/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null) return null;
    if(head.next === null) return head;

    let prev = head.next;
    
    head.next = head.next.next;
    prev.next = head;
    head = prev;
    prev = head.next;

    while(prev.next.next) {
        let swapLeft = prev.next;
        let swapRight = prev.next.next;
        prev.next = swapRight;
        swapLeft.next = swapRight.next;
        swapRight.next = swapLeft;
        prev = swapLeft;
    }

    return head;
};

/*
Runtime: 74 ms, faster than 59.62% of JavaScript online submissions for Swap Nodes in Pairs.
Memory Usage: 42.4 MB, less than 23.35% of JavaScript online submissions for Swap Nodes in Pairs.
*/