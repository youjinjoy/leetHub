/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {

    let left = 0;
    let right = n;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        const result = guess(mid);

        if (result === 0) {
            return mid;
        }
        else if (result === 1) {
            left = mid + 1;
        }
        else { // result === -1
            right = mid - 1;
        }
    }
};