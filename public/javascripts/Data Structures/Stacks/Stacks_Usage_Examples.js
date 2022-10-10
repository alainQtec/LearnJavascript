// ===========================
// Stacks usage
// In This Example
// we will reverse an array:
// ===========================
var stack = function (nodes) {
    this.count = 0
    this.storage = {}

    this.push = (item) => {
        this.storage[this.count] = item
        this.count++
    }
    this.pop = () => {
        if (this.count === 0) {
            return undefined
        } else {
            let el = this.storage[this.count]
            this.count--
            delete this.storage[this.count]
            return el
        }
    }
    this.peek = () => {
        let lastElement = this.storage[this.count-1]
        return lastElement
    }
    this.size = () => {
        return this.count
    }
}

function reverseArr(arr) {
    let rArr = []
    let arrLength = arr.length
    let i = 0
    while (i != arrLength) {
        rArr.push(arr.pop())
        i++
    }
    return rArr
}

function reverseWord(wordString) {
    let arr = []
    for (let i = 0; i < wordString.length; i++) {
        arr.push(wordString[i])
    }
    return reverseArr(arr).join('')
}
console.log(reverseWord('letters'))
// Example: Add item to the stack
const a = new stack()
console.log(a.storage)
a.push('_Item1')
a.push('Ite_m2')
a.push('_Item3')
console.log(a.storage)
console.log('now we pop one off:')
a.pop()
console.log(a.storage)
console.log(a.peek())
console.log(a.size())
// a.push('itemOne')
