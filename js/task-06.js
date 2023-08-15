const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", onValidInput);

function onValidInput(event) {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');

    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');

    } 
        
    
}
