"use strict";
const score = [1, 2, 3, 4, 5];
const score2 = [1, 2, 3, 4, 5];
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
