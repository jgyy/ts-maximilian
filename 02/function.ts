/**
 * add function
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 */
function add(n1: number, n2: number): number {
  return n1 + n2;
}

/**
 * print result function
 * @param {number} num
 * @return {void}
 */
function printResult(num: number): void {
  console.log('Result: ' + num);
  return;
}

/**
 * add and handle function
 * @param {number} n1
 * @param {number} n2
 * @param {function} cb
 */
function addAndHandle(n1: number, n2: number, cb: (res: number) => void): void {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));
const combineValues: (a: number, b: number) => number = add;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
