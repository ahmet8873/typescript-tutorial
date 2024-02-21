// tuples
let user: [number, string, boolean] = [1, "pedro", true];
// should be in the same order

// user=['pedro',2,false] // error

let rgb: [number, number, number] = [255, 255, 255];
// rgb=[1,2,3,4] // error

type UserType = [number, string];
const newUser: UserType = [1, "pedro"];
newUser[1] = "ahmet";
// newUser.push("hello"); push, pop, shift, unshift are allowed. this is a problem with tuples
console.log(newUser);
