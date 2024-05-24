class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithOutName;
    }
  }

  #sayWithOutName() {
    console.info("hello");
  }

  #sayWithName(name) {
    console.info(`hello ${name}`);
  }
}

const eko = new Person();
eko.say("joko");

// operator instanceof

// instanceof bisa inheritance

class Employee {}

class Manager extends Employee {}

const budi = new Employee();
const amba = new Manager();

console.info(typeof budi);
console.info(typeof amba);

console.info(budi instanceof Manager);
console.info(budi instanceof Employee);

console.info(amba instanceof Employee);
console.info(amba instanceof Manager);

// static field

class Configure {
  static name = "Belajar Javascript OOP";
  static version = 1.0;
  static author = "AmbaTokum";
}

const config = new Configure();
console.info(config);
console.info(Configure.name);
console.info(Configure.version);
console.info(Configure.author);

// static method

class MathUtil {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const result = MathUtil.sum(1, 1, 1, 1, 1);
console.info(result);

class MathError {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.info(MathError.sum());
  console.info("AMBA");
} catch (err) {
  console.info(`terjadi error : ${err.message}`);
} finally {
  // finally mau error / tidak akan tereksekusi
  console.info("proggram selesai");
}

console.info("tukam");

class Counter {
  #counter = 0;

  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
