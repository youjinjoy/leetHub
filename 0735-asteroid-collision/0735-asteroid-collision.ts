function asteroidCollision(asteroids: number[]): number[] {
    // 예시: [5,-6,10,2,-5]
    // [] 5
    // [5] -6
    // [-6] 10
    // [-6, 10] 2
    // [-6, 10, 2] -5
    // [-6, 10]
    const stack = [];
    for (let asteroid of asteroids) {
        let survived = true;

        while (survived && stack.length && stack[stack.length-1] > 0 && asteroid < 0) {
            if (Math.abs(asteroid) > stack[stack.length-1]) {
                stack.pop();
            }
            else if (Math.abs(asteroid) === stack[stack.length-1]) {
                stack.pop();
                survived = false;
            }
            else {
                survived = false;
            }
        }

        if (survived) {
            stack.push(asteroid);
        }
    }
    
    return stack;
};