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

function maxLevelSum(root: TreeNode | null): number {
    const queue: [node: TreeNode, level:number][] = [[root, 1]];

    let sum = 0;
    let maxSum = -Infinity;
    let beforeLevel = 1;
    let smallestLevel = 1;

    while (queue.length) {
        const [node, level] = queue.shift();

        if (beforeLevel !== level) {
            // console.log(sum);
            if (maxSum < sum) {
                smallestLevel = beforeLevel;
                maxSum = sum;
            }
            beforeLevel = level;
            sum = 0;
        }

        sum += node.val;

        
        if (node.left) {
            queue.push([node.left, level+1]);
        }

        if (node.right) {
            queue.push([node.right, level+1]);
        }

    }

    if (maxSum < sum) {
        smallestLevel = beforeLevel;
        maxSum = sum;
    }
    // console.log(sum);

    return smallestLevel;
};