function isPalindrome(s: string): boolean {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const zero = '0'.charCodeAt(0);
    const nine = '9'.charCodeAt(0);

    function isAlphaNumeric(char:string) {
        char = char.toLowerCase();
        const code = char.charCodeAt(0);

        if ((zero <= code && code <= nine) || (A <= code && code <= Z) || (a <= code && code <= z)) {
            return char;
        }
        else {
            return false;
        }
    }

    let sentence = '';
    for (const char of s) {
        if (isAlphaNumeric(char) !== false) {
            sentence += char.toLowerCase();
        }
    }

    let left = 0;
    let right = sentence.length - 1;

    while (left < right) {
        if (sentence[left] !== sentence[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }

    return true;
};
