/*
 * sets
 */
var myset = function () {
    var collection = []
    this.values = () => {
        return collection.values()
    }
    this.keys = () => {
        return collection.keys()
    }
    this.has = (element) => {
        let hasEl
        if (collection.indexOf(element) !== -1) {
            hasEl = true
        } else {
            hasEl = false
        }
        return hasEl
    }
    this.add = (element) => {
        collection.push(element)
    }
    this.size = () => {
        return collection.length
    }
    this.intersection = (otherSet) => {
        var intersection = new Set()
        this.values().forEach((el) => {
            if (otherSet.has(el)) {
                intersection.add(el)
            }
        })
        return intersection
    }
    this.union = (otherSet) => {}
}
