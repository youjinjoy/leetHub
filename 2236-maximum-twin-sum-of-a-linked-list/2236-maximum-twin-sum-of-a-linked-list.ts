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
    const arr = [];
    let node = head;
    while (node) {
        arr.push(node.val);
        node = node.next;
    }

    let answer = 1;
    const n = arr.length;
    for (let i = 0 ; i <= n/2-1 ; i++ ) {
        answer = Math.max(answer, arr[i] + arr[n-i-1]);
    }

    return answer;
};