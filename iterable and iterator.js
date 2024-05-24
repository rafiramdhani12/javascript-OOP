// Dalam JavaScript, iterable dan iterator adalah konsep penting yang berkaitan dengan pengulangan (iterasi) elemen dalam suatu koleksi data. Mari kita jelaskan masing-masingnya:

// Iterable
// Iterable adalah objek yang dapat diulang (diiterasi) menggunakan konstruksi seperti for...of loop. Objek yang dianggap iterable memiliki metode khusus yang disebut Symbol.iterator. Metode ini mengembalikan objek yang mengikuti protokol iterator.

// Contoh objek iterable dalam JavaScript adalah:

// Array
// String
// Map
// Set

//  contoh

let array = [1, 2, 3];
for (let item of array) {
  console.log(item);
}

// Iterator
// Iterator adalah objek yang menyediakan antarmuka untuk mengakses elemen dalam koleksi satu per satu. Iterator memiliki metode next(), yang mengembalikan objek dengan dua properti:

// value: nilai dari elemen saat ini.
// done: boolean yang menunjukkan apakah iterasi telah selesai.

let array2 = [1, 2, 3];
let iterator = array2[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Contoh Custom Iterable dan Iterator
// Kita juga dapat membuat objek kita sendiri yang iterable dengan mengimplementasikan metode Symbol.iterator.

// Contoh custom iterable:

let myIterable = {
  items: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let index = 0;
    let items = this.items;
    return {
      next() {
        if (index < items.length) {
          return {value: items[index++], done: false};
        } else {
          return {value: undefined, done: true};
        }
      },
    };
  },
};

for (let item of myIterable) {
  console.log(item);
}

// Output:
// 1
// 2
// 3
// 4

//   Dengan memahami konsep iterable dan iterator, kita dapat lebih efektif mengelola dan mengakses elemen dalam koleksi data secara berurutan dalam JavaScript.

// yt

// next return dan throw 3 hal penting didalam Iterator

class CounterIteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const counter = new Counter(1, 10);
// perulangan for of
for (const value of counter) {
  console.info(value);
}
