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
    // 1차원

    // DFS 재귀
    // function recursiveDFS(node: TreeNode | null, depth: number) {
    //     if (!node) return depth;

    //     return Math.max(recursiveDFS(node.left, depth + 1), recursiveDFS(node.right, depth + 1));
    // }
    // return recursiveDFS(root, 0);

    // DFS 반복문
    const stack = [];
    stack.push([root, 0]);

    let answer = 0;
    while (stack.length) {
        const [node, depth] = stack.pop();
        if (!node) {
            answer = Math.max(answer, depth);
            continue;
        }
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
    }
    return answer;
    // BFS 재귀
    // BFS 반복문
};