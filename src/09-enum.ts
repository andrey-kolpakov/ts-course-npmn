// Объявление enum: Вы определяете перечисление с помощью ключевого слова enum.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let currentDirection: Direction = Direction.Up;

console.log(currentDirection); // Вывод: 0

// Задание пользовательских значений: Вы можете назначить свои значения элементам перечисления:
enum StatusEnum {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

console.log(StatusEnum.Success); // Вывод: 200

// Строковые перечисления: Можно использовать строки вместо чисел:
enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

console.log(Colors.Red); // Вывод: "RED"


// Ограничение множества возможных значений: Если функция принимает ограниченный набор параметров, enum помогает это задать:
function setDirection(direction: Direction) {
    console.log(direction);
}

setDirection(Direction.Left); // Корректно
// setDirection("Left"); // Ошибка: строка недопустима

//Улучшение читаемости: Вместо магических чисел в коде (0, 1, 2) вы используете именованные значения.
// Унификация: Перечисления позволяют избежать ошибок, связанных с вводом некорректных значений.