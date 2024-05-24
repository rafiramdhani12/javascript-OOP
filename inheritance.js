function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.log(`halo ${name} nama saya manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.log(`halo ${name} nama saya Employee ${this.name}`);
};

const employee = new Employee("budi");
employee.sayHello("joko");

const manager = new Manager("Eko");
employee.sayHello("joko");
