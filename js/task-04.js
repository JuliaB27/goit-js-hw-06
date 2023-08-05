let counterValue = 0;

const totalValue = document.querySelector('#value');
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');

plusBtn.addEventListener("click", () => {
    counterValue += 1;
    totalValue.textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
    counterValue -= 1;
    totalValue.textContent = counterValue;
});