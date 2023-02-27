// *Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputName = document.querySelector('#name-input');
// console.log(inputName);
const outputName = document.querySelector('#name-output');
// console.log(outputName);

const newInput = event => {
    outputName.textContent = event.currentTarget.value;
    if (outputName.textContent === "") 
    return outputName.textContent = 'Anonymous';
};
inputName.addEventListener('input', newInput);