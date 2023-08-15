const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');



inputName.addEventListener('input', onInputChang);
function onInputChang(event) {
    event.currentTarget.value.trim() !== ""
    ? (nameOutput.textContent = event.currentTarget.value.trim())
    : (nameOutput.textContent = "Anonymous");
}