/**
 * @param {number} n1
 * @param {number} n2
 * @param {boolean} showResult
 * @param {string} phrase
 * @return {number}
 */
function add(
    n1: number, n2: number, showResult: boolean, phrase: string): number {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
  return 0;
}

const number1: number = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
