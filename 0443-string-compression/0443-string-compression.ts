function compress(chars: string[]): number {
    let prev = chars[0];
    let count = 1;
    let index = 0;
    const compression = [];
    for (let i = 1 ; i < chars.length ; i++) {
        if (prev !== chars[i]) {
            chars[index] = prev;
            index += 1;
            if (count > 1) {
                const countString = String(count);
                for (let n of countString) {
                    chars[index] = n;
                    index +=1;
                }
            }
            prev = chars[i];
            count = 1;
        }
        else {
            count += 1;
        }
    }

    chars[index] = prev;
    index += 1;
    if (count > 1) {
        const countString = String(count);
        for (let n of countString) {
            chars[index] = n;
            index +=1;
        }
    }

    console.log(chars);
    return index;
};