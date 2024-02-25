class User {
  name: string;
  email: string;
  age: number;
  isValid: boolean;
  private readonly _id: string;
  constructor(
    name: string,
    email: string,
    age: number,
    isValid: boolean,
    _id: string
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.isValid = isValid;
    this._id = _id;
  }
}

const user1 = new User("pedro", "pedro@pedro", 20, true, "123");
console.log(user1);

// user1.name=1; // error

// private
// you can reach readonly properties , but you cant reach private properties
// private name , #name -> these are the same thing

// public is default

class User2 {
  constructor(
    public name: string,
    public email: string,
    public age: number,
    public isValid: boolean,
    private readonly _id: string
  ) {}
}
