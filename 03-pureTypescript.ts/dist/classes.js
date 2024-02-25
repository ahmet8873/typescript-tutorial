"use strict";
class User {
    constructor(name, email, age, isValid, _id) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isValid = isValid;
        this._id = _id;
    }
}
const user1 = new User("pedro", "pedro@pedro", 20, true, "123");
console.log(user1);
// user1.name=1; // error
// private
// you can reach readonly properties , but you cant reach private properties
// private name , #name -> these are the same thing
// public is default
class User2 {
    constructor(name, email, age, isValid, _id) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isValid = isValid;
        this._id = _id;
    }
}
