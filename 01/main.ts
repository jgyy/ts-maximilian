const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function add(num1: number, num2: number): number {
  return num1 + num2;
}

button.addEventListener('click', function() {
  document.getElementById('add').innerText =
    String(add(+input1.value, +input2.value));
});
