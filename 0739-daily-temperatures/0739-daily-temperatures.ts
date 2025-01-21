function dailyTemperatures(temperatures: number[]): number[] {
    const stack = [];
    const result = Array(temperatures.length).fill(0);
    for (let i = 0 ; i < temperatures.length ; i++) {
        while(stack && temperatures[stack[stack.length-1]] < temperatures[i]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);

    }

    return result;
};