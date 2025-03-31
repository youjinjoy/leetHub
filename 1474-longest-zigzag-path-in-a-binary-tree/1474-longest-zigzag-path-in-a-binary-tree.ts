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

function longestZigZag(root: TreeNode | null): number {

    function dfs (node: TreeNode | null, depth: number, direction: boolean) {
        if (!node) {
            return depth;
        }

        // direction: true -> go to left
        // direction: false -> go to right
        if (direction) {
            return Math.max(dfs(node.left, depth + 1, false), dfs(node.right, 1, true));
        }
        else {
            return Math.max(dfs(node.right, depth + 1, true), dfs(node.left, 1, false));
        }
    }
    
    return Math.max(0, dfs(root, 0, true) - 1);
};