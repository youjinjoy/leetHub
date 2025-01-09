/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {

    const queue = [[...entrance, 0]];
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const colLen = maze.length;
    const rowLen = maze[0].length;
    const visited = Array.from({length: colLen}, () => new Array(rowLen).fill(false));
    visited[entrance[0]][entrance[1]] = true;

    while (queue.length) {
        const [cx, cy, cDepth] = queue.shift();
        
        for (let i = 0 ; i < 4 ; i++) {
            const [nx, ny, nDepth] = [cx+dx[i], cy+dy[i], cDepth + 1];
            if (nx >= 0 && nx < colLen && ny >= 0 && ny < rowLen && !visited[nx][ny] && maze[nx][ny] !== '+') {
                console.log(nx,ny);
                if (nx === 0 || ny === 0 || nx === colLen-1 || ny === rowLen-1) {
                    return nDepth;
                }
                queue.push([nx, ny, nDepth]);
                visited[nx][ny] = true;
            }
        }
    }

    return -1;
}