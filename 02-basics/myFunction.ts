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

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

// giving default values
function signUpUser2(name: string, email: string, isPaid: boolean = false) {}
signUpUser2("pedro", "pedro@pedro");

// Now , How can I return more accurate values from a function?

function addThree(num: number): number {
  return num + 3;
}

const hello = (s: string): string => "hello";

const heros = ["spiderman", "thor", "ironman"];

// when we map over heros we dont have to explicitly type it as string, because it already aware of that hero type is string
heros.map((hero): string => {
  return `hero is ${hero}`;
});

// void type,
// if not returning something, it should be void
function consoleError(err: string): void {
  console.log(err);
}

// never type
// never type means it will never return anything
function handleError(err: string): never {
  throw new Error(err);
}
