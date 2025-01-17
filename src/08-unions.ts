type Status = 'ok' | 'loading' | 'error'

const statusExample: Status = 'ok'

function printId(id: number | string): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}

function welcome(person: [string, string] | string): void {

    if(Array.isArray(person)){
        console.log('Hello', person[0] + person[1])
    }else{
        console.log('Hello ', person)
    }
}

welcome(['Имя', 'Фамилия'])
welcome('Имя и фамилия')
welcome('Имя')