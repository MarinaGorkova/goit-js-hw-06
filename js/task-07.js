const inputText = document.querySelector('#text');
console.log(inputText);

const inputElRange = document.querySelector('#font-size-control');
console.log(inputElRange);

inputElRange.addEventListener('input', (event) => {
    inputText.style.fontSize = event.currentTarget.value + 'px';
});