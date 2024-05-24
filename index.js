function Person(firsName, lastName) {
  this.firstName = firsName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.log(`hello ${name},my name is ${this.firstName}`);
  };
}

Person.prototype.sayBye = function () {
  console.log("good bye");
};

const person1 = new Person("perrel", "brown");
person1.sayHello("joko");

person1.sayBye();

console.log(person1);

function Employee(firsName) {
  this.firstName = firsName;
  this.sayHello = function (name) {
    console.log(`hello ${name},my name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName);
}

// Manager.prototype = Employee.prototype (salah)
// ####
Manager.prototype = Object.create(Employee.prototype);
// ####
Manager.prototype.say = function (name) {
  console.log(`hello ${name},`);
};

const manager1 = new Manager("perrel", "brown");
manager1.say("joko");
console.log(manager1);
