const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');



const onInput = ({currentTarget}) => {
    nameOutput.textContent = currentTarget.value;
    if (nameOutput.textContent === '') {
        nameOutput.textContent = 'Anonymous'
    }
};

inputName.addEventListener("input", onInput);