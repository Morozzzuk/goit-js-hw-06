//* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//* Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const CounterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};
const decr = document.querySelector('[data-action="decrement"]');
// console.log(decr);
const incr = document.querySelector('[data-action="increment"]');
// console.log(incr);
const valueEl = document.querySelector("#value");

decr.addEventListener('click', () => {
    CounterValue.decrement();
    valueEl.textContent = CounterValue.value;
})

incr.addEventListener('click', () => {
    CounterValue.increment();
    valueEl.textContent = CounterValue.value;
})
