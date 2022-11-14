/* Stack!!
* A stack is exactly what it sounds like. An element gets added to the top of
* the stack and only the element on the top may be removed. This is an example
* of an array implementation of a Stack. So an element can only be added/removed
* from the end of the array.
*/

// Methods: push, pop, peek, view, length

// Stacks
class Mystack {
  count = 0;
  storage = {};
  constructor() {
  }
  // Add the value at the end of the stack
  push(val){
    this.storage[this.count] = val
    this.count++
  }
  // Remove and return the value at the end of the stack
  pop(){
    if(this.count === 0){
      return undefined;
    }
    this.count--
    let returnVal = this.storage[this.count]
    delete this.storage[this.count];
    return returnVal
  }
  peek(){
    return this.storage[this.count-1]
  }
  size(){
    return this.count
  }
  view(){
    let i, res = []
    for(i = 0; i < this.count; i++) {
      res.push(this.storage[i]) 
    }
    return res
  }
  // Returns true if stack is empty, false otherwise
  isEmpty () {
    return this.storage === 0
  }
}

/*

var st = new Mystack()
st.push(2)
st.peek()
st.push(3)
st.push(4)
console.log(st.storage)
st.pop()
console.log(st.storage)
st.view()
st.isEmpty()

*/