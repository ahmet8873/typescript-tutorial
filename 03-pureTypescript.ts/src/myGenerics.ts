const score: Array<number> = [1, 2, 3, 4, 5];
const score2: number[] = [1, 2, 3, 4, 5];

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
