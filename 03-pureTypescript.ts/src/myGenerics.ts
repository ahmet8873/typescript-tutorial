const score: Array<number> = [1, 2, 3, 4, 5];
const score2: number[] = [1, 2, 3, 4, 5];
// Array<Type> is the same as Type[]

const names: Array<string> = ["pedro", "juan"];

function identityOne(val: number | boolean): number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);
// function identityThree<3>(val: 3): 3

function identityFour<T>(val: T): T {
  return val;
}

// we can pass any type

interface bootles {
  color: string;
  volume: number;
}
identityFour({ color: "red", volume: 10 });

//--------------------------------------

//if I return T from function it means I will return one of the value in this array
function getSearchProducts<T>(products: T[]): T {
  //return 3; // error
  return products[3];
}

// arrow function

const getSearchProducts2 = <T>(products: T[]): T => {
  return products[3];
};

console.log(getSearchProducts([1, 2, 3, 4, 5])); // 4

console.log(
  getSearchProducts2([" ali ", " pedro ", " juan ", " john", "jack"])
); // john

// default value example
const getSearchProducts3 = <T>(products: T[], index: number = 0): T => {
  return products[index];
};

console.log(getSearchProducts3([1, 2, 3, 4, 5]));
console.log(
  getSearchProducts3([" ali ", " pedro ", " juan ", " john", "jack"], 3)
);
