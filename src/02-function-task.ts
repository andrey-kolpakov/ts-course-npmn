function slice(str: string, start: number, end?: number): string {
    let newStr: string = ''

    let lastIndex: number

    if (end) {
        lastIndex = end > str.length ? str.length : end
    } else {
        lastIndex = str.length
    }

    for (let i = start; i < lastIndex; i++) {
        newStr += str[i]
    }

    return newStr
}

//he
console.log(slice('check', 1, 3))

//heck
console.log(slice('check', 1))