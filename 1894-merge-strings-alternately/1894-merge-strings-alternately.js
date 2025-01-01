/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = '';

    const n1 = word1.length;
    const n2 = word2.length;

    const isBiggerN1 = n1 >= n2;
    const n = isBiggerN1 ? n2 : n1;

    for (let i = 0 ; i < n ; i++) {
        answer += word1[i] + word2[i];        
    }

    if (n1 !== n2) {
        answer += isBiggerN1? word1.slice(n2-n1) : word2.slice(n1-n2)
    }

    return answer;
};