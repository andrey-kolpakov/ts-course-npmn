//Вместо запятых можно использовать ;
interface CarInterface {
    wheels: number
    brand: string
    type: string
    isNew: boolean
    notRequired?: boolean
}

const car: CarInterface = {
    wheels: 4,
    brand: 'BMW',
    type: 'Пенис',
    isNew: false,
    // notRequired: false
}

const car2: CarInterface = {
    wheels: 3,
    brand: 'Mercedes',
    type: 'Пенис2',
    isNew: true,
    notRequired: true
}


//Чтобы иметь возможность добавлять экземплярам новые поля, можно использовать следующую запись:
interface AirPlane{
    wings: number,
    brand: string,
    type: string
    isNew: boolean
    notRequired?: boolean

    [key: string]: unknown
}

//Добавляем новую пару на этапе объявления переменной
const airPlane1: AirPlane = {
    wings: 2,
    brand: 'AirBus',
    type: 'airplane', 
    isNew: true, 
    notRequired: true,

    comment: 'Добавленная пара ключ-значение'
}

//Добавляем новую пару уже после объявления переменной
const airPlane2: AirPlane = {
    wings: 2,
    brand: 'Boeing',
    type: 'airplane', 
    isNew: true, 
    notRequired: true,
}
airPlane2.newVariable = 1488