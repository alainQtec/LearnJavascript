
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// LOOP inside an ARRAY (use for & for of)
let array = ['one', 'two', 'Three', 'Four'];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element, index);
}
array.forEach(function parse(name, index) {
    console.log(name, index);
});
for (const element of array) {
    console.log(element, array.indexOf(element));
}
// LOOP inside object (use for-in)
for (const key in user) {
    console.log(
        key.toLocaleLowerCase(), user[key]
    );
}