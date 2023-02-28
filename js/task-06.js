//* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//* Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//* Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//* Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const newInput = document.querySelector("#validation-input");
const onBlur = event => {
  const inputColor = event.currentTarget;
  const inputLength = Number(inputColor.dataset.length);
  if (inputColor.value.length === inputLength) {
    inputColor.classList.remove('invalid');
    inputColor.classList.add('valid');
  } else {
    inputColor.classList.remove('valid');
      inputColor.classList.add('invalid');
  }
}
newInput.addEventListener("blur", onBlur);