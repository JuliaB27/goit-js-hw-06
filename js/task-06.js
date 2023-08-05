const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onValidInput);

function onValidInput() {
    if (textInput.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');
    } else {
        textInput.classList.add('invalid');
    }
}