var user = {
    name: "pedro",
    age: 20,
    isValid: true,
};
function createUser(name, email, age, isValid) {
    var user = {
        name: name,
        email: email,
        age: age,
        isValid: isValid,
    };
    return user;
}
// createUser(); this will give an error, you should provide values
createUser("pedro", "pedro@pedro", 20, true);
// return type object
function createUser2() {
    return {};
}
function createUser3() {
    return {};
}
// return object with spesific properties
function createUser4() {
    return {
        name: "pedro",
        age: 20,
    };
}
function createUser5(user) {
    return user;
}
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function createUser6(user) {
    return user;
}
var user1 = createUser6({
    _id: "123",
    name: "pedro",
    email: "pedro@pedro",
    age: 20,
    isValid: true,
});
console.log(user1);
// user1._id="321"; this will give an error, it is a readonly property
user1.name = "juan";
// if it would be an array ob objects
var users = [
    {
        _id: "123",
        name: "pedro",
        email: "pedro@pedro",
        age: 20,
        isValid: true,
    },
    {
        _id: "456",
        name: "juan",
        email: "juan@juan",
        age: 25,
        isValid: true,
    },
];
// Attempting to change _id will result in a compilation error
// users[0]._id = "321";
// Changing other properties is allowed
users[0].name = "Carlos";
users[1].age = 26;
var newObj = {
    cardNumber: "123",
    cardDate: "12/12",
    cvv: 123,
};
