import * as readline from "readline";
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr = [];
function calculate(arr) {
    let result = Number(arr[0]);
    for (let i = 1; i < arr.length; i += 2) {
        let op = arr[i];
        let num = Number(arr[i + 1]);
        if (op === "+") {
            result = result + num;
        }
        else if (op === '-') {
            result -= num;
        }
        else if (op === '*') {
            result *= num;
        }
        else if (op === '/') {
            result /= num;
        }
        else {
            console.error('Invalid operation');
            return;
        }
    }
    console.log(result);
}
function ask() {
    if (arr.length % 2 === 0) {
        read.question('Enter Number: ', input);
    }
    else {
        read.question('Enter Symbol: ', input);
    }
}
function input(value) {
    if (value === '=') {
        calculate(arr);
        process.exit();
    }
    else {
        arr.push(value);
        ask();
    }
}
ask();
