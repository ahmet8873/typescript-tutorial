function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
// if I add num.UpperCase() , I shouldnt be allowed to do that. But in the example above it is allowed.because it is type any
// function anotherAddTwo(num: number) {
//   num.toUpperCase();
//   return num + 2;
// }
//  now it will not work . because Property 'toUpperCase' does not exist on type 'number'.
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// giving default values
function signUpUser2(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signUpUser2("pedro", "pedro@pedro");
// Now , How can I return more accurate values from a function?
function addThree(num) {
    return num + 3;
}
var hello = function (s) { return "hello"; };
var heros = ["spiderman", "thor", "ironman"];
// when we map over heros we dont have to explicitly type it as string, because it already aware of that hero type is string
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// void type,
// if not returning something, it should be void
function consoleError(err) {
    console.log(err);
}
// never type
// never type means it will never return anything
function handleError(err) {
    throw new Error(err);
}
