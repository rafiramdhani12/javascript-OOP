const {info} = require("console");

class Person {
  //   jika menambahkan method di class automatis akan masuk kedalam prototype
  constructor(name) {
    this.name = name;
    console.info(`membuat person ${name}`);
  }
  sayHello(name) {
    console.info(`hi ${name} , my name is ${this.name}`);
  }
}

const person1 = new Person("amba");
person1.sayHello("joko");
console.info(person1);
const person2 = new Person("tukam");

class Corp {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.info(`hi ${name} , my name is ${this.job} ${this.firstName} `);
  }
}

class Manager extends Corp {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }

  sayHello(name) {
    console.info(
      `hi ${name}, my name is manager ${this.firstName} ${this.lastName}`
    );
  }
}

const budi = new Corp("budi");
budi.job = "employee";
budi.sayHello("joko");

const eko = new Manager("eko", "warteg");
eko.job = "manager";
eko.sayHello("joko");

class Shape {
  paint() {
    console.info("Paint Shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.info("Paint Circle");
  }
}

const circle = new Circle();
circle.paint();

class Orang {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const fuad = new Orang("fuad", "97");
console.info(fuad);
console.info(fuad.fullName);

fuad.fullName = "rusdi barber";
console.info(fuad);

class Customer {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const ciimut = new Customer("ciimut", "temen rusdi");
console.info(ciimut);

class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

info(counter.get());
counter.counter = 1000;
info(counter);
