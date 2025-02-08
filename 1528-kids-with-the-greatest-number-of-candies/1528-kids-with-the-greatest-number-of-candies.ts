function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandy = Math.max(...candies);
    const criterion = maxCandy - extraCandies;

    const result = [];
    for (let i = 0 ; i < candies.length ; i++) {
        if (candies[i] >= criterion) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
};