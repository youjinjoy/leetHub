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

function pairSum(head: ListNode | null): number {
    let slow = head;
    let fast = head;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let current = slow.next;
    slow.next = null;
    let prev = null;

    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }


    let first = head;
    let second = prev;
    let answer = 1;
    while (first) {
        answer = Math.max(answer, first.val+second.val);
        first = first.next;
        second = second.next;
    }
    return answer;
};