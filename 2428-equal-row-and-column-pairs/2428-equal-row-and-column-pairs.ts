function equalPairs(grid: number[][]): number {
    const N = grid.length;
    const rowMap = new Map();

    const columns = Array(N).fill('');

    for (let column = 0 ; column < N ; column++) {
        const row = grid[column].join(' ');
        rowMap.set(row, (rowMap.get(row) || 0) + 1);
        for (let i = 0 ; i < N ; i++) {
            columns[i] += grid[column][i]+' ';
        }
    }

    let answer = 0;
    for (const column of columns) {
        answer += (rowMap.get(column.trim()) || 0);
    }

    return answer;
};