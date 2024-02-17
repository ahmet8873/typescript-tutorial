let greetings: string = "hello Ahmet";

console.log(greetings);

// greetings=6
// Type 'number' is not assignable to type 'string

// Cannot redeclare block-scoped variable 'greetings'
// export  {} will work as well

// number
let userId: number = 123;
// if you type  'userId. '  you will see all the number methods
// type inference: you dont have to type ': number'. it will automatically be number when you assign it a number value

// boolean
let isLoggedIn: boolean = false;

// any
// it is a getaway from using typescript and not a good practise
let hero;

function getHero() {
  return "thor";
}

hero = getHero();
// you have to explicitly type 'hero' to be string, like the example below
let hero2: string;
hero2 = getHero();

export {};
