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
// console.log(user1);
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
// getter and setter
class User3 {
    constructor(name, email, _id) {
        this.name = name;
        this.email = email;
        this._id = _id;
        this._courseCount = 1;
        this.city = "san francisco";
    }
    deleteToken() { }
    get id() {
        return this._id;
    }
    get appleEmail() {
        return `apple.${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // you cannot return anything from setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
const hitesh = new User3("hitesh", "hitesh@hitesh", "123");
//hitesh._courseCount = 2; // error
//hitesh.deleteToken(); // error
//hitesh._id = "321"; // error
// GETTERS AND SETTERS  RECTANGLE EXAMPLE
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    // Getter for width
    get width() {
        return this._width;
    }
    // Setter for width
    set width(value) {
        if (value <= 0) {
            throw new Error("Width must be greater than 0");
        }
        this._width = value;
    }
    // Getter for height
    get height() {
        return this._height;
    }
    // Setter for height
    set height(value) {
        if (value <= 0) {
            throw new Error("Height must be greater than 0");
        }
        this._height = value;
    }
    // Method to calculate area
    calculateArea() {
        return this._width * this._height;
    }
}
// Creating a rectangle object
const rectangle = new Rectangle(5, 10);
// Accessing properties using getters
console.log("Width:", rectangle.width); // Output: 5
console.log("Height:", rectangle.height); // Output: 10
// Accessing properties using setters
rectangle.width = 8;
rectangle.height = 12;
// Accessing properties again using getters
console.log("Updated Width:", rectangle.width); // Output: 8
console.log("Updated Height:", rectangle.height); // Output: 12
// Trying to set invalid width (less than or equal to 0)
try {
    rectangle.width = -2; // This will throw an error
}
catch (err) {
    console.error({
        error: err instanceof Error ? err.message : "Failed to do something exceptional",
    }); // Output: Width must be greater than 0
}
