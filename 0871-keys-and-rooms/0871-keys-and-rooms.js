/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
    const start = rooms[0];
    const n = rooms.length;
    const visited = Array(n).fill(false);
    visited[0] = true;

    function dfs(keys) {

        for (let key of keys) {

            if (!visited[key]) {
                
                visited[key] = true;
                dfs(rooms[key]);
            }

        }

    }

    dfs(rooms[0]);

    if (visited.includes(false)) return false;
    return true;
};