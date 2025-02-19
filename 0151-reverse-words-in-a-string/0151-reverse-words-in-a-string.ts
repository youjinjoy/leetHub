function reverseWords(s: string): string {
    const result = [];
    let word = '';
    for (let element of s) {
        if (element !== ' ') {
            word += element;
        }
        else if (word.length) {
            result.push(word);
            word = '';
        }
    }

    if (word.length) {
        result.push(word);
    }
    
    result.reverse();

    return result.join(' ');
};