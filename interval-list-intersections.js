/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {

    let i = 0;
    let j = 0;

    let res = []
    while (i < A.length && j < B.length) {
        let lo = Math.max(A[i][0], B[j][0])
        let hi = Math.min(A[i][1], B[j][1])

        if (lo <= hi) {
            res.push([lo, hi])
        }

        if (A[i][1] < B[j][1]) {
            i++
        } else {
            j++
        }
    }


    return res

};