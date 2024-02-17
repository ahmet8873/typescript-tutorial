# typescript-tutorial

## Table of Contents

- [Introduction to TypeScript](#introduction-to-typescript)
- [Installing TypeScript](#installing-typescript)
- [Basic Types](#basic-types)
- [Variables and Constants](#variables-and-constants)
- [Functions](#functions)
- [Interfaces](#interfaces)
- [Classes](#classes)
- [Access Modifiers](#access-modifiers)
- [Inheritance](#inheritance)
- [Generics](#generics)
- [Enums](#enums)
- [Type Assertions](#type-assertions)
- [Type Inference](#type-inference)
- [Advanced Types](#advanced-types)
- [Modules](#modules)
- [Namespaces](#namespaces)
- [Decorators](#decorators)
- [Working with JavaScript Libraries](#working-with-javascript-libraries)
- [Advanced Techniques](#advanced-techniques)

## Introduction to TypeScript

    TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds optional static typing to JavaScript, providing developers with features like type checking and interfaces while still compiling down to standard JavaScript.
    ```
    function greet(name: string) {

return `Hello, ${name}!`;
}

console.log(greet("John")); // Output: Hello, John!
```

## Installing TypeScript

You can install TypeScript globally using npm:

```shell
npm i -g typescript
```

## Basic Types

TypeScript supports various basic types such as number, string, boolean, null, undefined, void, and any. You can also use array types and tuple types.

```
let age: number = 25;
let name: string = "Alice";
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3, 4];
let tuple: [string, number] = ["Alice", 25];
```

## Variables and Constants

Declare variables using let and constants using const. TypeScript allows you to specify types explicitly or rely on type inference.

```
let variable: number = 10;
const constant: string = "Hello";
let inferredType = "TypeScript"; // Inferred as type string
```

## Functions

Functions in TypeScript can have typed parameters and return types. You can also define optional parameters and default parameter values.

```
function add(x: number, y: number): number {
    return x + y;
}

function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
```

## Interfaces

Interfaces define the structure of an object, specifying the names and types of its properties and methods. They help enforce a contract for classes or objects.

```
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
    return `Hello, ${person.name}!`;
}
```

## Classes

TypeScript supports class-based object-oriented programming. You can define classes with properties, methods, constructors, and access modifiers.

```
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

let dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.
```

## Access Modifiers

Access modifiers such as public, private, and protected control the visibility and accessibility of class members.

```
class Car {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    accelerate(): void {
        this.speed += 10;
    }

    getSpeed(): number {
        return this.speed;
    }
}

let car = new Car(50);
car.accelerate();
console.log(car.getSpeed()); // Output: 60
```

## Inheritance

Classes can inherit properties and methods from other classes using the extends keyword. TypeScript supports single and multiple inheritance through interfaces.

```
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog("Dog");
dog.speak(); // Output: Dog barks.
```

## Generics

Generics allow you to create reusable components that can work with various types. They provide a way to define functions, classes, and interfaces with placeholder types.

```
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("TypeScript");
```

## Enums

Enums are a way to define a set of named constants. They make it easier to work with a set of related values.

```
enum Color {
    Red,
    Green,
    Blue,
}

let color: Color = Color.Green;
console.log(color); // Output: 1
```

## Type Assertions

Type assertions are a way to tell the compiler about the type of a variable when you know more about its type than TypeScript does.

```
let someValue: any = "TypeScript";
let strLength: number = (someValue as string).length;
```

## Type Inference

Type inference is a way to automatically determine the type of a variable based on its value. It helps you write cleaner and more readable code.
Type inference allows TypeScript to infer the types of variables based on their initial values.

```
let name = "Alice"; // Inferred as type string
let age = 25; // Inferred as type number
let isStudent = true; // Inferred as type boolean
let numbers = [1, 2, 3, 4]; // Inferred as type number[]
let tuple = ["Alice", 25]; // Inferred as type [string, number]
```

## Advanced Types

TypeScript supports advanced types such as union types, intersection types, type aliases, type guards, and conditional types.

```
type ID = string | number;

function processID(id: ID) {
    if (typeof id === "string") {
        // Process string ID
    } else {
        // Process number ID
    }
}
```

## Modules

Modules are a way to organize code into reusable components. They allow you to create reusable functions, classes, and interfaces.
Modules in TypeScript provide a way to organize code into reusable units. You can use import and export statements to control the visibility of code between modules.

```
// Math.ts
export function sum(x: number, y: number): number {
    return x + y;
}

// App.ts
import { sum } from "./Math";
console.log(sum(1, 2)); // Output: 3
```

## Namespaces

Namespaces are a way to organize code into logical groups. They help prevent naming collisions and provide a way to encapsulate code.

```
namespace Geometry {
    export class Circle {
        // Circle implementation
    }
}
```

## Decorators

Decorators are a way to add functionality to classes, functions, and properties. They allow you to modify the behavior of a class, function, or property.
Decorators are a feature that allows you to attach metadata to classes, methods, properties, or parameters. They are widely used in frameworks like Angular.

## Working with JavaScript Libraries

TypeScript supports working with JavaScript libraries such as React, Vue, and Angular. You can use TypeScript to integrate with these libraries.

## Advanced Techniques

TypeScript supports advanced techniques such as type inference, generics, decorators, and modules.
Advanced TypeScript techniques include conditional types, mapped types, mixin patterns, and more. These techniques can help you write more expressive and maintainable code.

```
// Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;

type SomeType = string | null;
type NonNullSomeType = NonNullable<SomeType>; // Inferred as type string

// Mapped Types
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// Mixin Pattern
class Model {
    serialize() {
        return JSON.stringify(this);
    }
}

function withDefaults<T extends { new (...args: any[]): {} }>(Base: T) {
    return class extends Base {
        defaultOptions = {
            // Default options
        };
    };
}

const ActiveModel = withDefaults(Model);
```

## Best Practices

Follow best practices such as using strict mode, enabling type checking, avoiding the any type, using interfaces for APIs, and leveraging TypeScript's features to write safer and more predictable code.

```
// Enable strict mode in tsconfig.json
{
    "compilerOptions": {
        "strict": true
    }
}

// Enable type checking in tsconfig.json
{
    "compilerOptions": {
        "noImplicitAny": true
    }
}
```
