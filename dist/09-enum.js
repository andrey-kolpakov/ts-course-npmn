"use strict";
// Объявление enum: Вы определяете перечисление с помощью ключевого слова enum.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let currentDirection = Direction.Up;
console.log(currentDirection); // Вывод: 0
// Задание пользовательских значений: Вы можете назначить свои значения элементам перечисления:
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Success"] = 200] = "Success";
    StatusEnum[StatusEnum["NotFound"] = 404] = "NotFound";
    StatusEnum[StatusEnum["ServerError"] = 500] = "ServerError";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.Success); // Вывод: 200
// Строковые перечисления: Можно использовать строки вместо чисел:
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
console.log(Colors.Red); // Вывод: "RED"
// Ограничение множества возможных значений: Если функция принимает ограниченный набор параметров, enum помогает это задать:
function setDirection(direction) {
    console.log(direction);
}
setDirection(Direction.Left); // Корректно
// setDirection("Left"); // Ошибка: строка недопустима
//Улучшение читаемости: Вместо магических чисел в коде (0, 1, 2) вы используете именованные значения.
// Унификация: Перечисления позволяют избежать ошибок, связанных с вводом некорректных значений.
