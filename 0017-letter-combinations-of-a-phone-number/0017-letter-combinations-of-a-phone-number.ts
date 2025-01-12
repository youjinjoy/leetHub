function letterCombinations(digits: string): string[] {
    const n = digits.length;
    if (n === 0) return [];

    const dials = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    const answer = [];
    function backtrack(letter: string, depth: number) {
        if (depth === n) {
            answer.push(letter);
            return;
        }

        for (let dial of dials[digits[depth]]) {
            letter += dial;
            backtrack(letter, depth+1);
            letter = letter.slice(0,-1);
        }
    }

    backtrack('', 0);

    return answer;
};