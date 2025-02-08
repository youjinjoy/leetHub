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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaves1 = [];
    const leaves2 = [];

    function dfs(node: TreeNode | null, leaves: number[]) {
        if (node.left) {
            dfs(node.left, leaves);
        }
        if (node.right) {
            dfs(node.right, leaves);
        }
        if (!node.left && !node.right) {
            leaves.push(node.val);
        }
    }
    dfs(root1, leaves1);
    dfs(root2, leaves2);

    if (leaves1.length !== leaves2.length) {
        return false;
    }

    for (let i = 0 ; i < leaves1.length ; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }

    return true;
};