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

function deleteMiddle(head: ListNode | null): ListNode | null {

    let n = 0;
    let currentNode = head;
    while (currentNode) {
        currentNode = currentNode.next;
        n++;
    }

    if (n === 1) return null;
    
    const targetIndex = Math.floor(n/2);
    let i = 0;
    currentNode = head;
    for (let i = 0 ; i < targetIndex - 1 ; i++) {
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;

    return head;
};