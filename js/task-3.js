const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', nameInputHandler);

function nameInputHandler(params) {
    if (nameInput.value.trim() === '') {
        return nameOutput.textContent = 'Anonymous';
    } else {
        return nameOutput.textContent = nameInput.value.trim();
    };
};