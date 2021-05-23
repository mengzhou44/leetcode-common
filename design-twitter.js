class Twitter {

    constructor() {
        this.tweets = []
        this.map = new Map()
    }

    postTweet(userId, tweetId) {
        this.tweets.unshift([userId, tweetId])
    }

    getNewsFeed(userId) {
        let userIds = [userId]

        if (this.map.has(userId)) {
            userIds = [userId, ...this.map.get(userId)]
        }


        let feeds = []
        for (let [userId, tweetId] of this.tweets) {
            if (userIds.includes(userId)) {
                feeds.push(tweetId)
            }
            if (feeds.length === 10) {
                break
            }
        }

        return feeds

    }

    follow(followerId, followeeId) {
        if (!this.map.has(followerId)) {
            this.map.set(followerId, [])
        }

        this.map.get(followerId).push(followeeId)

    }

    unfollow(followerId, followeeId) {
        if (this.map.has(followerId)) {
            let filtered = this.map.get(followerId).filter(item => item !== followeeId)
            this.map.set(followerId, filtered)
        }

    }



}

