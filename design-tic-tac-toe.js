class TicTacToe {
    constructor(n) {
        this.n = n
        this.map = new Map()
        for (let i = 0; i < n; i++) {
            this.map.set(`row${i}`, [0, 0])
        }

        for (let i = 0; i < n; i++) {
            this.map.set(`col${i}`, [0, 0])
        }

        this.map.set('dig1', [0, 0])
        this.map.set('dig2', [0, 0])

    }

    move(row, col, player) {
        let n = this.n
        let res = this.findWhoWins(`row${row}`, player)
        if (res !== 0) return res

        res = this.findWhoWins(`col${col}`, player)
        if (res !== 0) return res


        if (row === col) {
            res = this.findWhoWins('dig1', player)
            if (res !== 0) return res
        }


        if (row === n - 1 - col) {
            res = this.findWhoWins('dig2', player)
            if (res !== 0) return res
        }


        return 0
    }


    findWhoWins(key, player) {
        let [count1, count2] = this.map.get(key)
        let n = this.n

        if (player === 1) {
            count1++
            this.map.set(key, [count1, count2])
            if (count1 === n) return 1

        } else {
            count2++
            this.map.set(key, [count1, count2])
            if (count2 === n) return 2
        }
        return 0
    }
}

