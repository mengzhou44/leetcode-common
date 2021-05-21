var removeInvalidParentheses = function (s) {
    let res = new Set()
    let minRemoved = Number.MAX_SAFE_INTEGER

    dfs(0)

    return Array.from(res)

    function dfs(index, balance = 0, cur = [], removedCount = 0) {
        if (index === s.length) {
            if (balance === 0) {
                if (minRemoved > removedCount) {
                    minRemoved = removedCount
                    res = new Set()
                    res.add(cur.join(''))
                } else if (minRemoved === removedCount) {
                    res.add(cur.join(''))
                }
            }

            return
        }

        if (s[index] !== '(' && s[index] !== ')') {
            cur.push(s[index])
            dfs(index + 1, balance, [...cur], removedCount)
            cur.pop()
        } else {
            dfs(index + 1, balance, [...cur], removedCount + 1)
            cur.push(s[index])

            if (s[index] === '(') {
                dfs(index + 1, balance + 1, [...cur], removedCount)
            } else if (balance > 0) {
                dfs(index + 1, balance - 1, [...cur], removedCount)

            }
            cur.pop()
        }

    }

    

}