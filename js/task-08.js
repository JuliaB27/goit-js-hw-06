const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }} = event.currentTarget;
    const inputForm = { email: email.value, password: password.value };

    if ( email.value === '' || password.value === '') {
        return alert(`Всі поля повинні бути заповнені`)

    }
    console.log (inputForm);
    event.currentTarget.reset();
}
