/**
 * Takes in a timestamp and returns the time elapsed
 * @param {Date} timestamp 
 * @returns {String} time elapsed since the given timestamp
 */
export const timeElapsed = (timestamp) => {
    const now = Date.now()
    const secondsAgo = Math.floor((now - timestamp) / 1000)

    if (secondsAgo < 60) {
        return `${secondsAgo}s ago`
    } else if (secondsAgo < 3600) {
        const minutesAgo = Math.floor(secondsAgo / 60)
        return `${minutesAgo}m ago`
    } else if (secondsAgo < 86400) {
        const hoursAgo = Math.floor(secondsAgo / 3600)
        return `${hoursAgo}h ago`
    } else if (secondsAgo < 604800) {
        const daysAgo = Math.floor(secondsAgo / 86400)
        return `${daysAgo}d ago`
    } else {
        const weeksAgo = Math.floor(secondsAgo / 604800)
        return `${weeksAgo}w ago`
    }
}