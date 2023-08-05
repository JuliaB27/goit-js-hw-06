const textSize = document.querySelector('#text');
const sizeControl = document.querySelector('#font-size-control');

sizeControl.addEventListener("input", onSizeChange);
function onSizeChange(event) {
    textSize.style.fontSize = event.currentTarget.value + "px";
}