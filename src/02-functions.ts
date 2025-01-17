function sum(a: number, b: number): number {
    return a + b
}

let summary: number = sum(2, 3)

// void - возвращаемое значение отсутствует, ничего функция не возвращает
function log(name: string): void {
    console.log('Hello', name)
}

// в этом случае функция НИКОГДА не закончится, потому что Error не даёт функции "завершиться"
function crash(): never {
    throw new Error('crash')
}

// вопросительный знак говорит о том, что параметр может прийти, а может не прийти
function notRequiredVariable(name: string, userId?: number): void {
    console.log(name, userId)
}

//number[] - массив чисел
function average(...nums: number[]): number {
    const sum: number = nums.reduce((current, total) => current + total, 0)

    return sum / nums.length
}

console.log(average(...[1, 2, 3]))
