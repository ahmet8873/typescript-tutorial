"use strict";
class User4 {
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
class SubUser extends User4 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 4; // error cannot reach private properties
    }
}
