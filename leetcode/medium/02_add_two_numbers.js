/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var carryOver = false;
    var str = "";
    var sum;

    while (l1 != null || l2 != null) {
        sum = 0;

        if (carryOver) {
            sum++;
            carryOver = false;
        }

        if (l1 == null) {
           sum += l2.val;
           l2 = l2.next;
           if(sum >= 10) {
               carryOver = true;
               sum = sum%10;
           }
           str += sum.toString();
        } else if (l2 == null) {
            sum += l1.val;
            l1 = l1.next;
            if(sum >= 10) {
                carryOver = true;
                sum = sum%10;
            }
            str += sum.toString();
        } else {                                      //else, both l1 and l2 have values, must add them together then create a string
            sum += l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next;
            if(sum >= 10) {
                carryOver = true;
                sum = sum%10;
            }
            str += sum.toString();
        }

    }
    
    if (carryOver) {
        str += "1";
    }
    
    var res = new ListNode(parseInt(str[0]),null);
    var curr = res;

    for(var i=1; i < str.length; i++) {
        var temp = new ListNode (parseInt(str[i]), null);
        
        curr.next = temp;
        curr = curr.next;
    }

    return res;
};

/*
Runtime: 254 ms, faster than 8.31% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 48.2 MB, less than 14.89% of JavaScript online submissions for Add Two Numbers.
 */


    /*
    ran into edge cases where numbers were too big to be stored in var, switching to string manipulation solution

    
    var head1 = l1;
    var head2 = l2;
    var tot = 0;
    var itr1 = 0;
    var itr2 = 0;

    while (head1 != null) {
        tot += head1.val * (Math.pow(10,itr1));
        itr1++;
        head1 = head1.next;
    }

    while (head2 != null) {
        tot += head2.val * (Math.pow(10,itr2));
        itr2++;
        head2 = head2.next;
    }


    var resHead = new ListNode(tot%10, null);
    var tempHead = resHead;
    tot = parseInt(tot/10);

    while(tot != 0) {
        var temp = new ListNode(tot%10, null);
        tot = parseInt(tot/10);

        tempHead.next = temp;
        tempHead = tempHead.next;
    }
    
    return resHead;
    */
