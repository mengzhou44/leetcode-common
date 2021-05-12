/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let emailToName = new Map()
    let g = buildGraph(accounts)

    let res = []
    let visited = new Set()
    for (let node of g.keys()) {
        if (visited.has(node)) continue
        let merged = []
        dfs(node, merged)

        let sorted = merged.sort((a, b) => {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })
        let name = emailToName.get(node)

        res.push([name, ...sorted])
    }

    return res

    function dfs(node, merged) {
        visited.add(node)
        merged.push(node)
        for (let email of g.get(node)) {
            if (visited.has(email)) continue
            dfs(email, merged)
        }
    }

    function buildGraph(accounts) {
        let res = new Map()
        for (let account of accounts) {
            let emails = account.slice(1)
            emailToName.set(emails[0], account[0])
            if (!res.has(emails[0])) {
                res.set(emails[0], new Set())
            }
            for (let i = 1; i < emails.length; i++) {
                emailToName.set(emails[i], account[0])
                if (!res.has(emails[i])) {
                    res.set(emails[i], new Set())
                }
                res.get(emails[i]).add(emails[0])
                res.get(emails[0]).add(emails[i])
            }
        }

        return res
    }
};