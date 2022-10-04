let user = {
    firstName: "",
    lastName: "",
    fullName: function (firstName, lastName) {
        return this.firstName + " " + this.lastName;
    }
}

user.firstName = "SpongeBob";
user.lastName = "SquarePants";
console.log(user.fullName());