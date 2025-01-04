/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {

    const S = s.split('')
    const stars = [];
    const result = [];

    while (S.length) {
        const top = S.pop();
        if (top === '*') {
            stars.push(top);
        }
        else {
            if (!stars.length) {
                result.push(top);
            }
            else {
                stars.pop();
            }
        }
    }

    return result.reverse().join('')
};