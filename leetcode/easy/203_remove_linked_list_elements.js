/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const prev = new ListNode();
    prev.next = head;
    
    let curr = prev;
    
    while(curr != null && curr.next != null) {
        if(curr.next.val != val) {
            curr = curr.next;
        } else {
            curr.next = curr.next.next;
        }
    }

    return prev.next;
}; 

/*
Runtime: 84 ms, faster than 82.56% of JavaScript online submissions for Remove Linked List Elements.
Memory Usage: 46.4 MB, less than 77.60% of JavaScript online submissions for Remove Linked List Elements.
*/