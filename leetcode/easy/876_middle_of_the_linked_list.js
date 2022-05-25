/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
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
var middleNode = function(head) {
    if(head === null) return null;
    if(head.next === null) return head;

    let res = head, countTwo = head;

    while(countTwo.next != null && countTwo.next.next != null) {
        res = res.next;
        countTwo = countTwo.next.next;
    }

    if(countTwo.next != null) {
        res = res.next;
    }

    return res;
};

/*
Runtime: 67 ms, faster than 72.62% of JavaScript online submissions for Middle of the Linked List.
Memory Usage: 42.3 MB, less than 33.70% of JavaScript online submissions for Middle of the Linked List.
*/