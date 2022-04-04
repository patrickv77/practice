/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 == null && list2 == null) return list1;
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    if(list1.val < list2.val){
        var res = new ListNode(list1.val, null);
        list1 = list1.next;
    }else{
        var res = new ListNode(list2.val, null);
        list2 = list2.next;
    }

    var result = res;

    while(list1 != null || list2 != null) {
        //if one list is empty, fill the rest of the result list with the non empty list-- else compare the two values and put the lower value in the result list
        if(list1 == null){
            res.next = list2;
            res = res.next;
            list2 = list2.next;
        }else if(list2 == null){
            res.next = list1;
            res = res.next;
            list1 = list1.next;
        }else{
            if(list1.val <= list2.val || list2 == null) {
                res.next = list1;
                res = res.next;
                list1 = list1.next;
            }else{
                res.next = list2;
                res = res.next;
                list2 = list2.next;
            }
        }
    }
    
    return result;
};

/*
Runtime: 95 ms, faster than 49.65% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 43.9 MB, less than 82.26% of JavaScript online submissions for Merge Two Sorted Lists.
*/