function closeStrings(word1: string, word2: string): boolean {
    const W1 = new Map();
    const W2 = new Map();

    for (let w of word1) {
        W1.set(w, (W1.get(w) || 0 )+ 1);
    }

    for (let w of word2) {
        W2.set(w, (W2.get(w) || 0 )+ 1);
    }

    const keys1 = [...W1.keys()].sort();
    const keys2 = [...W2.keys()].sort();

    if (keys1.join('') !== keys2.join('')) {
        return false;
    }

    const values1 = [...W1.values()].sort((a,b)=>a-b);
    const values2 = [...W2.values()].sort((a,b)=>a-b);

    if (values1.join('') !== values2.join('')) {
        return false;
    }

    return true;
};