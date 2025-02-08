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

function goodNodes(root: TreeNode | null): number {

    function dfs(root: TreeNode | null, maxVal: number) {
        if (!root) return 0;

        if (root.val >= maxVal) {
            maxVal = root.val;
            return dfs(root.left, maxVal) + dfs(root.right, maxVal) + 1;
        }
        else {
            return dfs(root.left, maxVal) + dfs(root.right, maxVal);
        }
    }

    return dfs(root, root.val);
};