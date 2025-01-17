"use strict";
function sum(a, b) {
    return a + b;
}
let summary = sum(2, 3);
// void - возвращаемое значение отсутствует, ничего функция не возвращает
function log(name) {
    console.log('Hello', name);
}
// в этом случае функция НИКОГДА не закончится, потому что Error не даёт функции "завершиться"
function crash() {
    throw new Error('crash');
}
// вопросительный знак говорит о том, что параметр может прийти, а может не прийти
function notRequiredVariable(name, userId) {
    console.log(name, userId);
}
//number[] - массив чисел
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
console.log(average(...[1, 2, 3]));
