const user = {
  name: "pedro",
  age: 20,
  isValid: true,
};

function createUser(
  name: string,
  email: string,
  age: number,
  isValid: boolean
) {
  const user = {
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
function createUser2(): {} {
  return {};
}

function createUser3(): object {
  return {};
}

// return object with spesific properties
function createUser4(): { name: string; age: number } {
  return {
    name: "pedro",
    age: 20,
  };
}

// TYPE ALIASES

type User = {
  name: string;
  email: string;
  age: number;
  isValid: boolean;
};

function createUser5(user: User): User {
  return user;
}
//  createUser5({ name: "pedro", email: "pedro@pedro", age: 20 })
// Argument of type '{ name: string; email: string; age: number; }' is not assignable to parameter of type 'User'.

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// READONLY PROPERTIES

type User2 = {
  readonly _id: string;
  name: string;
  email: string;
  age: number;
  isValid: boolean;
};

function createUser6(user: User2): User2 {
  return user;
}

const user1 = createUser6({
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

const users: User2[] = [
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

// OPTIONAL PROPERTIES
type newUserType = {
  readonly _id: string;
  name: string;
  email: string;
  age: number;
  isValid: boolean;
  creditCardDetails?: string;
};

// creaditCardDetails?: string; this is an optional property

// ----------------------------------

type CardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = CardNumber &
  cardDate & {
    cvv: number;
  };

const newObj: cardDetails = {
  cardNumber: "123",
  cardDate: "12/12",
  cvv: 123,
};
