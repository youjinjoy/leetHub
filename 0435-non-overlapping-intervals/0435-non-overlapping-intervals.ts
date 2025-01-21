function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b) => a[1]-b[1]);

    let lastEnd = - Infinity;
    let answer = 0;
    for (let interval of intervals) {
        const start = interval[0];
        const end = interval[1];

        if (start < lastEnd) {
            answer += 1;
        }
        else {
            lastEnd = end;
        }
    }

    return answer;
};