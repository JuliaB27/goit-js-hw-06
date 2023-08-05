const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }} = event.currentTarget;
    if ( email.value === '' || password.value === '') {
        alert(`Всі поля повинні бути заповнені`)

    }
    console.log ("email:" `${email.value}`, "password:" `${password.value}` );
    event.currentTarget.reset();
}
