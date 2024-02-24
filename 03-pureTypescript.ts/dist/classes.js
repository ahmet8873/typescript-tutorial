"use strict";
class User {
    constructor(name, email, age, isValid) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isValid = isValid;
    }
}
const user1 = new User("pedro", "pedro@pedro", 20, true);
console.log(user1);
