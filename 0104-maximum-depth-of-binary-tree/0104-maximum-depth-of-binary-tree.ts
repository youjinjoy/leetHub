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

function maxDepth(root: TreeNode | null): number {
    if (root == null) {
        return 0;
    }

    return traverse(root, 0);
};

function traverse(node: TreeNode | null, depth: number):number {
    if (node === null) {
        return depth;
    }
    
    return Math.max(traverse(node.left, depth+1), traverse(node.right, depth+1));
}