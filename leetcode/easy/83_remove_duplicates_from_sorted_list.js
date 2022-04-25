/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 */

/**
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
var deleteDuplicates = function(head) {
    var temp = head.val;
    var curr = head;

    while(curr.next != null) {
        if(temp == curr.next.val){
            curr.next = curr.next.next;
        } else {
            temp = curr.next.val;
            curr = curr.next;
        }
    }

    return head;
};

/*
Runtime: 85 ms, faster than 66.43% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 44.3 MB, less than 62.95% of JavaScript online submissions for Remove Duplicates from Sorted List.
*/
