"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "hello Ahmet";
console.log(greetings);
// greetings=6
// Type 'number' is not assignable to type 'string
// Cannot redeclare block-scoped variable 'greetings'
// export  {} will work as well
// number
var userId = 123;
// if you type  'userId. '  you will see all the number methods
// type inference: you dont have to type ': number'. it will automatically be number when you assign it a number value
// boolean
var isLoggedIn = false;
// any
// it is a getaway from using typescript and not a good practise
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
// you have to explicitly type 'hero' to be string, like the example below
var hero2;
hero2 = getHero();
