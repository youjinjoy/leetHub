/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    // node가 2개 이상인 경우
    let prev = head;
    let cur = head.next;

    head.next = null;

    while (cur) {
        let next = cur.next;
        cur.next = prev;

        prev = cur;
        cur = next;
    }
    
    return prev;
}