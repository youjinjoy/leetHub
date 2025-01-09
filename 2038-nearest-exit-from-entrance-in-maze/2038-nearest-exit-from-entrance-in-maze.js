/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let queue = []
    queue.push([entrance, 0])
    const m = maze.length
    const n = maze[0].length
    while(queue.length){
        const [cell, steps] = queue.shift()
        const [i,j] = cell
        // check if cell is invalid/visited 
        if(i===m || i===-1 || j===n || j===-1 || maze[i][j]!=='.'){
            continue
        }

        // mark cell as visited
        maze[i][j] = '*'

        // reached border
        if((i===m-1 || i===0 || j===n-1 || j===0) && steps!==0){ 
            return steps
        }
        
        // visit neighbours
        queue.push([[i,j+1], steps+1])
        queue.push([[i,j-1], steps+1])
        queue.push([[i+1,j], steps+1])
        queue.push([[i-1,j], steps+1])
    }
    return  -1
};
