// Objects
const user = {
    name: 'Alain',
    age: 22,
    height: 178,
    money: NaN,
    greet: function () {
        console.log('HELLO tHERE!');
    }
};

// Inheritance, Super, ...
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hi, My name is', this.name);
        console.log(`I am ${this.age} years old,`);
    }
}
class Student extends Person {
    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }
    intro() {
        super.sayHello();
        console.log(`I have ${Number.parseFloat(this.gpa)} gpa.`);
    }
}
class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age);
        classSize = classSize;
    }
    intro() {
        super.sayHello();
        console.log(`I teach a class of ${Number.parseInt(this.classSize)} students.`);
    }
}
let student = new Student("Alain Herve", 21, 30);
let teacher = new Teacher('Bob', 45, 49);
student.intro()
console.log("")
teacher.intro()
//