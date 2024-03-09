"use strict";
const score = [1, 2, 3, 4, 5];
const score2 = [1, 2, 3, 4, 5];
// Array<Type> is the same as Type[]
const names = ["pedro", "juan"];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
// function identityThree<3>(val: 3): 3
function identityFour(val) {
    return val;
}
identityFour({ color: "red", volume: 10 });
//--------------------------------------
//if I return T from function it means I will return one of the value in this array
function getSearchProducts(products) {
    //return 3; // error
    return products[3];
}
// arrow function
const getSearchProducts2 = (products) => {
    return products[3];
};
console.log(getSearchProducts([1, 2, 3, 4, 5])); // 4
console.log(getSearchProducts2([" ali ", " pedro ", " juan ", " john", "jack"])); // john
// default value example
const getSearchProducts3 = (products, index = 0) => {
    return products[index];
};
console.log(getSearchProducts3([1, 2, 3, 4, 5]));
console.log(getSearchProducts3([" ali ", " pedro ", " juan ", " john", "jack"], 3));
