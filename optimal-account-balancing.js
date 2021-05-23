/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function (transactions) {

    let map = new Map()
    for (let [giver, taker, amount] of transactions) {
        if (!map.has(giver)) {
            map.set(giver, 0)
        }
        if (!map.has(taker)) {
            map.set(taker, 0)
        }

        map.set(giver, map.get(giver) + amount)
        map.set(taker, map.get(taker) - amount)
    }


    let balances = Array.from(map.values()).filter(amount => amount !== 0)

    return dfs(0, balances)


    function dfs(k, balances) {
        if (k === balances.length) return 0

        if (balances[k] === 0) {
            return dfs(k + 1, balances)
        }

        let min = Number.MAX_SAFE_INTEGER

        for (let j = k + 1; j < balances.length; j++) {
            if (balances[j] * balances[k] < 0) {
                balances[j] += balances[k]
                min = Math.min(min, 1 + dfs(k + 1, balances))
                balances[j] -= balances[k]
            }

        }

        return min

    }

};