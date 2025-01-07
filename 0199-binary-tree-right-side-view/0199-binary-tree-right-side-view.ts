/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null, answer: number[] = [], depth = 0): number[] {
    if (!root) return answer;
    
    answer[depth] = root.val;
    rightSideView(root.left, answer, depth + 1);
    return rightSideView(root.right, answer, depth + 1);
};