type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

/**
 * @param {Combinable} input1
 * @param {Combinable} input2
 * @param {ConversionDescriptor} resultConversion
 * @return {Combinable}
 */
function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor,
): Combinable {
  let result: Combinable;
  if (
    typeof input1 === 'number' &&
    typeof input2 === 'number' ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
