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
