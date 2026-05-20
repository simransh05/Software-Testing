const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr: string[] = [];

function calculate(arr: string[]): void {
    let result: number = Number(arr[0]);
    for (let i = 1; i < arr.length; i += 2) {
        let op: string = arr[i]!;
        let num: number = Number(arr[i + 1]);
        if (op === "+") {
            result = result + num;
        } else if (op === '-') {
            result -= num;
        } else if (op === '*') {
            result *= num;
        } else if (op === '/') {
            result /= num;
        } else {
            console.error('Invalid operation');
            return;
        }
    }
    console.log(result);
}

function ask(): void {
    if (arr.length % 2 === 0) {
        read.question('Enter Number: ', input);
    } else {
        read.question('Enter Symbol: ', input)
    }
}

function input(value: string): void {
    if (value === '=') {
        calculate(arr);
        read.close();
    } else {
        arr.push(value);
        ask();
    }
}

ask();