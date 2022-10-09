// ===========================
// Stacks usage
// In This Example
// we will reverse an array:
// ===========================

// create the array
var letters = [];
var rletters = []; // reverseArray
var word = "Super_Car";

function reverseArr (arr) {
  let rArr = [];
  let arrLength = arr.length;
  let i = 0; while(i != arrLength) {
    rArr.push(arr.pop());
    i++
  }
  return rArr
}

function reverseWord (wordString) {
  let arr = [];
  for(let i = 0; i < wordString.length; i++) {
    arr.push(wordString[i]);
  }
  return reverseArr(arr).join('');
}

reverseWord('letters');

var stack = function() {
  this.count = 0;
  this.storage = {};
  
  this.push = (item) => {
    this.storage[this.count] = item;
    this.count++;
  }
  this.pop = () => {}
  return this
}
let a = new stack();

// Example: Add item to the stack
a.push('itemOne');
