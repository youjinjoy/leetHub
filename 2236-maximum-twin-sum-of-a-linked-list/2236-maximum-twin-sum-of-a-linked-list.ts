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

    while (fast) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;;
    let next = null;
    while (slow) {
        next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    let first = head;
    let second = prev;

    let answer = 1;
    while (second) {
        answer = Math.max(answer, first.val + second.val);
        first = first.next;
        second = second.next;
    }
    return answer;
};