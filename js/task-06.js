const inputEl = document.querySelector('#validation-input')
const symbolsLength = Number(inputEl.dataset.length)

const validationInput = () => {
    const inputLength = inputEl.value.length
    if (symbolsLength === inputLength){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}

inputEl.addEventListener('blur', validationInput)
