// In Objects:
let user = {
    firstName: "",
    lastName: "",
    fullName: function (firstName, lastName) {
        return this.firstName + " " + this.lastName;
    },
    set firstN(value) {
        this.firstName = value.toUpperCase();
        // now we have an entire block of code (to use for other cool stuff)
        // like making this firstName ReadOnly etc ...
    },
    set lastN(value) {
        this.lastName = value.toUpperCase();
    },
    get fullN() {
        return this.firstName + " " + this.lastName;
    }
}

user.firstName = "SpongeBob";
user.lastN = "SquarePants";
console.log(user.fullName());
console.log(user.fullN);

// In Classes (Recommended)
class Person {
    constructor(name, age, gender, address) {
        this.name = name;
        // this.firstName = name.split(" ")[0];
        // this.lastName =
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    set firstName(value) {
        this.firstName = value.toUpperCase();
    }
    set lastName(value) {
        this.lastName = value.toUpperCase();
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let person = new Person('Alain', '21', 'M', 'Nowhere');
console.log(person.name);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address);