function combinationSum(candidates, target) {

    candidates = candidates.sort((a, b) => a - b)

    let res = []

    dfs(0, target)

    return res

    function dfs(index, balance, current = []) {
        if (balance < 0) return

        if (balance === 0) {
            res.push(current)
            return
        }

        for (let i = index; i < candidates.length; i++) {
            dfs(i, balance - candidates[i], [...current, candidates[i]])
        }

    }


}
