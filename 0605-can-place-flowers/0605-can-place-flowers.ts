function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;

    for (let i = 0 ; i < flowerbed.length ; i++) {
        if (flowerbed[i] === 0) {
            const prevEmpty = i === 0 || flowerbed[i-1] === 0;
            const nextEmpty = i === flowerbed.length - 1 || flowerbed[i+1] === 0;
            if (prevEmpty && nextEmpty) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }

    return n <= count;
};