// tuples
var user = [1, "pedro", true];
// should be in the same order
// user=['pedro',2,false] // error
var rgb = [255, 255, 255];
var newUser = [1, "pedro"];
newUser[1] = "ahmet";
// newUser.push("hello"); push, pop, shift, unshift are allowed. this is a problem with tuples
console.log(newUser);
