function reverseVowels(s: string): string {
    const S = s.split('');

    let leftPointer = 0;
    let rightPointer = s.length - 1;

    const vowels=new Set(['a','i','e','o','u','A','I','E','O','U']);

    while (leftPointer < rightPointer) {

        while (leftPointer < rightPointer && !vowels.has(S[leftPointer])) {
            leftPointer++;
        }

        while (leftPointer < rightPointer && !vowels.has(S[rightPointer])) {
            rightPointer--;
        }

        [S[leftPointer],S[rightPointer]] = [S[rightPointer],S[leftPointer]];
        leftPointer++;
        rightPointer--;
    }

    return S.join('');
};