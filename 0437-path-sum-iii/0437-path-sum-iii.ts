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

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0;

    return pathSum(root.left, targetSum) + pathSum(root.right, targetSum) + dfs(root, 0, targetSum);

};

function dfs(root: TreeNode | null, currentSum: number, targetSum: number) {
    if (!root) return 0;

    if (currentSum + root.val === targetSum) {                
        return dfs(root.left, currentSum + root.val, targetSum) + dfs(root.right, currentSum + root.val, targetSum) + 1;
    }
    else {
        return dfs(root.left, currentSum + root.val, targetSum) + dfs(root.right, currentSum + root.val, targetSum);
    }
}