function dateFormat(timestamp) {
    const formattedDate = new Date(timestamp).toLocaleDateString()
    return formattedDate
}

module.exports = dateFormat;