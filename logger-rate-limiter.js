class Logger {

    constructor() {
        this.map = new Map()
    }

    shouldPrintMessage(timestamp, message) {
        if (!this.map.has(message)) {
            this.map.set(message, timestamp)
            return true
        } else {
            let ts = this.map.get(message)

            if (timestamp - ts < 10) {

                return false
            }
            this.map.set(message, timestamp)
            return true
        }
    }
}
