//* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//* Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//* Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//* Оновлюй інтерфейс новим значенням змінної counterValue.

const CounterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener('click', () => {
    CounterValue.decrement();
    valueEl.textContent = CounterValue.value;
})

incrementBtn.addEventListener('click', () => {
    CounterValue.increment();
    valueEl.textContent = CounterValue.value;
})
