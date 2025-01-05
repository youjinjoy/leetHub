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
    if (!root) return 0;

    const stack:[TreeNode, number][] = [[root, 1]];
    let maxValue = 0;

    while (stack.length) {
        const [currentNode, depth] = stack.pop();
        maxValue = Math.max(maxValue, depth);

        if (currentNode.left) {
            stack.push([currentNode.left, depth + 1]);
        }
        if (currentNode.right) {
            stack.push([currentNode.right, depth + 1]);
        }
    }

    return maxValue;
};