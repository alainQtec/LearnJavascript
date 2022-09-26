// Copyright 2022 alainQtec
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// lOOP IN ARRAY (Basic for & for of)
let array = ['one', 'two', 'Three', 'Four'];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element, index);
}
console.log('*********************************\n\n')
array.forEach(function parse(name, index) {
    console.log(name, index);
});

console.log('---------------------------------\n\n')
for (const element of array) {
    console.log(element, array.indexOf(element));
}
// LOOP inside object (for-in)
console.log('-----------for-in-------------\n\n')
for (const key in user) {
    console.log(
        key.toLocaleLowerCase(), user[key]
    );
}