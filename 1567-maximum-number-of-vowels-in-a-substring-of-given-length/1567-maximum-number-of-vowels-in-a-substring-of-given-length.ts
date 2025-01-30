function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a','e','i','o','u']);
    const prefixSum = Array(s.length + 1).fill(0);

    // s.length >= 1 이므로
    if (vowels.has(s[0])) {
        prefixSum[1] = 1;
    }

    for (let i = 1 ; i < s.length ; i++) {
        prefixSum[i+1] = vowels.has(s[i]) ? prefixSum[i] + 1 : prefixSum[i];
    }

    let answer = 0;
    for (let i = k ; i <= s.length ; i++) {
        answer = Math.max(answer, prefixSum[i]-prefixSum[i-k]);
    }


    return answer;
};