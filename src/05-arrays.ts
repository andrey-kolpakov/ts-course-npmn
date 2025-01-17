const numbers = [1, 2, 3, 4, true, 'Text']

let strings: string[] = []
strings = ['text1', 'text2', 'text3']

let strings2: Array<string> = []
strings2 = ['text3', 'text4', 'text5']

strings.push('2')

// Нельзя, потому что заявлены строки
// strings.push(2)

const arrOfArr: string[][] = [['text', 'text'],  ['text', 'text'], ['text', 'text']]

const arrOfArr2: (string | number | boolean)[][] = [[1, 3, 4], ['text', 'text'], [false]]

const arrOfArr3: any[][] = [[1, 3, 4], ['text', 'text'], [false]];
