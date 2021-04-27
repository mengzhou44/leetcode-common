/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    let map = new Map()

    for (let employee of employees) {
        map.set(employee.id, {
            importance: employee.importance,
            subordinates: employee.subordinates
        })
    }

    let res = 0

    dfs(id)

    return res

    function dfs(id) {
        let { importance, subordinates } = map.get(id)
        res += importance
        for (let sub of subordinates) {
            dfs(sub)
        }
    }

};