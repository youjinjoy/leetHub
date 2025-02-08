function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandy = Math.max(...candies);

    const result = [];
    for (let i = 0 ; i < candies.length ; i++) {
        if (candies[i] + extraCandies >= maxCandy) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
};