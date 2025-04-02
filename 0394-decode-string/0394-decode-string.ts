function decodeString(s: string): string {
    let currentNum = 0;
    let currentStr = '';
    const stack = [];
    for (const char of s) {
        if ('0123456789'.includes(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        }
        else if (char === '[') {
            stack.push([currentNum, currentStr]);
            currentNum = 0;
            currentStr = '';
        }
        else if (char === ']') {
            const [num, str] = stack.pop();
            currentStr = str + currentStr.repeat(num);
        }
        else {
            currentStr += char;
        }
    }

    return currentStr;
};