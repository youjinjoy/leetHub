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
    function recursiveDFS(root: TreeNode | null) {
        if (!root) return 0;
        
        return Math.max(recursiveDFS(root.left), recursiveDFS(root.right)) + 1;
    }

    return recursiveDFS(root);

    // DFS 반복문
    // const stack = [];
    // stack.push([root, 0]);

    // let answer = 0;
    // while (stack.length) {
    //     const [node, depth] = stack.pop();
    //     if (!node) {
    //         answer = Math.max(answer, depth);
    //         continue;
    //     }
    //     stack.push([node.left, depth + 1]);
    //     stack.push([node.right, depth + 1]);
    // }
    // return answer;

    // BFS 반복문
    // const queue = [];
    // queue.push([root, 0]);
    // let answer = 0;
    // while (queue.length) {
    //     const [node, depth] = queue.shift();
    //     if (!node) {
    //         answer = depth;
    //         continue;
    //     }
    //     queue.push([node.left, depth+1]);
    //     queue.push([node.right, depth+1]);
    // }
    // return answer;
};