var buttons = document.querySelector('button');
/**
 * click handler function
 * @param {string} message
 */
function clickHandler(message) {
    if (!document.getElementById('add').innerText) {
        document.getElementById('add').innerText = 'Clicked ' + message;
    }
    else {
        document.getElementById('add').innerText = '';
    }
}
if (buttons) {
    buttons.addEventListener('click', clickHandler.bind(null, 'You\'re welcome!'));
}
