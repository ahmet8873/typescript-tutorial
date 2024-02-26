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
// console.log(user1);

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

// getter and setter
class User3 {
  private _courseCount = 1;
  readonly city: string = "san francisco";
  constructor(
    public name: string,
    public email: string,

    private _id: string
  ) {}

  private deleteToken() {}

  get id(): string {
    return this._id;
  }

  get appleEmail(): string {
    return `apple.${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // you cannot return anything from setter
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

const hitesh = new User3("hitesh", "hitesh@hitesh", "123");
//hitesh._courseCount = 2; // error

//hitesh.deleteToken(); // error

//hitesh._id = "321"; // error

// GETTERS AND SETTERS  RECTANGLE EXAMPLE
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width(): number {
    return this._width;
  }

  // Setter for width
  set width(value: number) {
    if (value <= 0) {
      throw new Error("Width must be greater than 0");
    }
    this._width = value;
  }

  // Getter for height
  get height(): number {
    return this._height;
  }

  // Setter for height
  set height(value: number) {
    if (value <= 0) {
      throw new Error("Height must be greater than 0");
    }
    this._height = value;
  }

  // Method to calculate area
  calculateArea(): number {
    return this._width * this._height;
  }
}

// Creating a rectangle object
const rectangle = new Rectangle(5, 10);

// Accessing properties using getters
console.log("Width:", rectangle.width); // Output: 5
console.log("Height:", rectangle.height); // Output: 10

// Accessing properties using setters
rectangle.width = 8;
rectangle.height = 12;

// Accessing properties again using getters
console.log("Updated Width:", rectangle.width); // Output: 8
console.log("Updated Height:", rectangle.height); // Output: 12

// Trying to set invalid width (less than or equal to 0)
try {
  rectangle.width = -2; // This will throw an error
} catch (error) {
  console.error(error.message); // Output: Width must be greater than 0
}
