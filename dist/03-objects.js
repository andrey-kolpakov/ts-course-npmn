"use strict";
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Пенис',
    isNew: false,
    // notRequired: false
};
const car2 = {
    wheels: 3,
    brand: 'Mercedes',
    type: 'Пенис2',
    isNew: true,
    notRequired: true
};
//Добавляем новую пару на этапе объявления переменной
const airPlane1 = {
    wings: 2,
    brand: 'AirBus',
    type: 'airplane',
    isNew: true,
    notRequired: true,
    comment: 'Добавленная пара ключ-значение'
};
//Добавляем новую пару уже после объявления переменной
const airPlane2 = {
    wings: 2,
    brand: 'Boeing',
    type: 'airplane',
    isNew: true,
    notRequired: true,
};
airPlane2.newVariable = 1488;
