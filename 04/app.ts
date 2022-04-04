const add4 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const printOutput: (a: number | string) => void =
  (output) => console.log(output);
printOutput(add4(2, 4));
const addNumbers = add4(1, 22, 333, 45.6);
console.log(addNumbers);

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person4 = {
  firstName: 'Max',
  age: 30,
};
const copiedPersion = {...person4};
console.log(copiedPersion);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const {firstName: userName4, age} = person4;
console.log(userName4, age, person4);
