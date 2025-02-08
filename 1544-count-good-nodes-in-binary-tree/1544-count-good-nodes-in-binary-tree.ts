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
    let answer = 0;
    function dfs(node: TreeNode | null, maxVal: number) {
        if (!node) return;

        if (node.val >= maxVal) {
            maxVal = node.val;
            answer += 1;
        }
        dfs(node.left, maxVal);
        dfs(node.right, maxVal);
    }

    dfs(root, root.val);

    return answer;
};