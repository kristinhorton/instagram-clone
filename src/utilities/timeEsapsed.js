/**
 * Takes in a timestamp and returns the time elapsed
 * @param {Date} timestamp 
 * @param {Boolean} longFormat if true returns time elapsed in a long format, false by default
 * @returns {String} time elapsed since the given timestamp
 */
export const timeElapsed = (timestamp, longFormat = false) => {
    const now = Date.now()
    const secondsAgo = Math.floor((now - timestamp) / 1000)

    if (secondsAgo < 60) {
        if (secondsAgo == 1) {
            return longFormat ? `${secondsAgo} second ago` : `${secondsAgo}s ago`
        } else {
            return longFormat ? `${secondsAgo} seconds ago` : `${secondsAgo}s ago`
        }
    } else if (secondsAgo < 3600) {
        const minutesAgo = Math.floor(secondsAgo / 60)
        if (minutesAgo == 1) {
            return longFormat ? `${minutesAgo} minute ago` : `${minutesAgo}m ago`
        } else {
            return longFormat ? `${minutesAgo} minutes ago` : `${minutesAgo}m ago`
        }
    } else if (secondsAgo < 86400) {
        const hoursAgo = Math.floor(secondsAgo / 3600)
        if (hoursAgo == 1) {
            return longFormat ? `${hoursAgo} hour ago` : `${hoursAgo}h ago`
        } else {
            return longFormat ? `${hoursAgo} hours ago` : `${hoursAgo}h ago`
        }
    } else if (secondsAgo < 604800) {
        const daysAgo = Math.floor(secondsAgo / 86400)
        if (daysAgo == 1) {
            return longFormat ? `${daysAgo} day ago` : `${daysAgo}d ago`
        } else {
            return longFormat ? `${daysAgo} days ago` : `${daysAgo}d ago`
        }
    } else {
        const weeksAgo = Math.floor(secondsAgo / 604800)
        if (weeksAgo == 1) {
            return longFormat ? `${weeksAgo} week ago` : `${weeksAgo}w ago`
        } else {
            return longFormat ? `${weeksAgo} weeks ago` : `${weeksAgo}w ago`
        }
    }
}