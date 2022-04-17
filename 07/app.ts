const names: Array<string> = [];
const promise: Promise<string> = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve('This is done');
    }), 2000;
  } catch (err) {
    reject(err);
  }
});

promise.then((data) => {
  data.split(' ');
});

/**
 * @param {T} objA
 * @param {U} objB
 * @return {object}
 */
function merge<T extends object, U extends object>(objA: T, objB: U): object {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
console.log(mergedObj);

interface Lengthy {
  length: number;
}

/**
 * @param {T} element
 * @return {[T, string]}
 */
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length == 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

/**
 * @param {T} obj
 * @param {U} key
 * @return {string}
 */
function extractAndConvert
  <T extends object, U extends keyof T>(obj: T, key: U): string {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

/** data storage class */
class DataStorage<T extends string | boolean | number> {
  private data: T[] = [];

  /** @param {T} item */
  addItem(item: T) {
    this.data.push(item);
  }

  /**
   * @param {T} item
   * @return {void}
   */
  removeItem(item: T): void {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  /** @return {T[]} */
  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();

interface CourseGoal {
  title: string;
  description: string;
  completedUntil: Date;
}

/**
 * @param {string} title
 * @param {string} description
 * @param {Date} date
 * @return {CourseGoal}
 */
function createCourseGoal(
    title: string, description: string, date: Date): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completedUntil = date;
  return courseGoal as CourseGoal;
}

const names8: Readonly<string[]> = ['Max', 'Anna'];
