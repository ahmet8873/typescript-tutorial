const suoerHeroes: string[] = [];
const suoerHeroes2: Array<string> = [];
// superHeroes.push(1) // error
// superHeroes.push('spiderman') // ok

type User = {
  name: string;
  email: string;
  age: number;
};

const users: User[] = [];

users.push({ name: "pedro", email: "pedro@pedro", age: 20 });

// array inside array
const MLModels: number[][] = [
  [1, 2],
  [3, 4],
];

MLModels.push([5, 6]);
console.log(MLModels);
// MLModels.push('sas');    // error
