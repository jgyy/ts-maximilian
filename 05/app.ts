interface AddFn {
  (a: number, b: number): number;
}

const add5: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
};

/** person class with greetables */
class Person implements Greetable {
  name?: string;
  age = 30;

  /** @param {string} n */
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  /** @param {string} phrase */
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

const user1: Greetable = new Person('Max');
user1.greet('Hi there - I am');
console.log(user1);
