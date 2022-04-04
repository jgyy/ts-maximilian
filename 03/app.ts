const buttons = document.querySelector('button');

/**
 * add function
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 */
function add(n1: number, n2: number): number {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return 0;
}

/**
 * click handler function
 * @param {string} message
 */
function clickHandler(message: string) {
  if (!document.getElementById('add')!.innerText) {
    document.getElementById('add')!.innerText =
      'Clicked ' + message + add(1, 1);
  } else {
    document.getElementById('add')!.innerText = '';
  }
}

if (buttons) {
  buttons.addEventListener(
      'click', clickHandler.bind(null, 'You\'re welcome!'));
}
