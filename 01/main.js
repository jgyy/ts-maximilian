var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    document.getElementById('add').innerText =
        String(add(+input1.value, +input2.value));
});
