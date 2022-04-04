let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

/**
 * generate error function
 * @param {string} message
 */
function generateError(message: string): never {
  throw new Error(message);
}

generateError('An error occurred!');
