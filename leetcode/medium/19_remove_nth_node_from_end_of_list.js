/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //Nth node from the end = (length - n + 1)
    //two pointer approach, pointer 1 starts at head, pointer 2 starts n spaces from head.
    //increment both until pointer 2 reaches the end
    //remove node in front of pointer 1
    if(head.next === null) return null;

    let first = head, second = head;

    for(let i = 0; i < n; i++) {
        second = second.next;
    }
    
    if(second === null) {
        return head.next
    }

    while(second.next != null) {
        first = first.next;
        second = second.next;
    }

    first.next = first.next.next;

    return head;
};

/*
Runtime: 97 ms, faster than 29.01% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 43.7 MB, less than 16.34% of JavaScript online submissions for Remove Nth Node From End of List.
*/