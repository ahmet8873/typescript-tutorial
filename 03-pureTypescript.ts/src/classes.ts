class User {
  name: string;
  email: string;
  age: number;
  isValid: boolean;
  constructor(name: string, email: string, age: number, isValid: boolean) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.isValid = isValid;
  }
}

const user1 = new User("pedro", "pedro@pedro", 20, true);
console.log(user1);
