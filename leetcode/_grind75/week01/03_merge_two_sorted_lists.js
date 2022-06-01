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
    
    var res = new ListNode();
    if(list1.val <= list2.val) {
        res = list1;
        list1 = list1.next;
    }else{
        res = list2;
        list2 = list2.next;
    }
    
    //head of list
    let result = res;

    while(list1 || list2) {
        if(list1 == null) {
            while(list2){
                res.next = list2;
                res = res.next;
                list2 = list2.next;
            }
        } 

        if(list2 == null) {
            while(list1){
                res.next = list1;
                res = res.next;
                list1 = list1.next;
            }
        } 

        if(list1 && list2){
            if(list1.val <= list2.val) {
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
Runtime: 109 ms, faster than 26.22% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 43.6 MB, less than 96.20% of JavaScript online submissions for Merge Two Sorted Lists.
*/