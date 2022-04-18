/**
 * @param {string} logString
 * @return {Function}
 */
function logger(logString: string): Function {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

/**
 * @param {string} template
 * @param {string} hookId
 * @return {Function}
 */
function withTemplate(template: string, hookId: string): Function {
  console.log('TEMPLATE FACTORY');
  return function
    <T extends {new(...args: any[]): {name: string}}>(OriginalConstructor: T) {
    return class extends OriginalConstructor {
      /** @param {any} _ */
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        console.log(hookId);
        if (hookId) {
          console.log(template);
        }
      }
    };
  };
}

/** person class */
@logger('LOGGING - PERSON')
@withTemplate('<h1>My Person Object</h1>', 'app')
class Person8 {
  name = 'Max';

  /** constructor method */
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person8();
console.log(pers);

/**
 * @param {any} target
 * @param {string | Symbol} propertyName
 */
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

/**
 * @param {any} target
 * @param {string} name
 * @param {PropertyDescriptor} descriptor
 */
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

/**
 * @param {any} target
 * @param {string | Symbol} name
 * @param {PropertyDescriptor} descriptor
 */
function Log3(
    target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

/**
 * @param {any} target
 * @param {string | Symbol} name
 * @param {number} position
 */
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

/** product class */
class Product {
  @Log
    title: string;
  private _price: number;

  /** @param {number} val */
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  /**
   * @param {string} t
   * @param {number} p
   */
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  /**
   * @param {number} tax
   * @return {number}
   */
  @Log3
  getPriceWithTax(@Log4 tax: number): number {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

/**
 * @param {any} _
 * @param {string} _2
 * @param {PropertyDescriptor} descriptor
 * @return {PropertyDescriptor}
 */
function AutoBind(
    _: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

/** printer class */
class Printer {
  message = 'This works!';

  /** show message method */
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
};

const registeredValidators: ValidatorConfig = {};

/**
 * @param {any} target
 * @param {string} propName
 */
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'required',
    ],
  };
}

/**
 * @param {any} target
 * @param {string} propName
 */
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      'positive',
    ],
  };
}

/**
 * @param {any} obj
 * @return {boolean}
 */
function validate(obj: any): boolean {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    if (objValidatorConfig.hasOwnProperty(prop)) {
      for (const validator of objValidatorConfig[prop]) {
        switch (validator) {
          case 'required':
            isValid = isValid && !!obj[prop];
            break;
          case 'positive':
            isValid = isValid && obj[prop] > 0;
            break;
        }
      }
    }
  }
  return isValid;
}

/** course class */
class Course {
  @Required
    title: string;
  @PositiveNumber
    price: number;

  /**
   * @param {string} t
   * @param {number} p
   */
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const createdCourse = new Course('eks', 99);
if (!validate(createdCourse)) {
  console.log('Invalid input, please try again!');
} else {
  console.log(createdCourse);
}
