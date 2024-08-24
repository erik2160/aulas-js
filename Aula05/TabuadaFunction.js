const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} + ${num} = ${i + num}`);
    }
}

function multiply(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i * num}`);
    }
}

function skipNumber(num) {
    for (let i = 1; i <= 10; i++) {
        if (i === num) {
            continue;
        }
        console.log(`The number is ${i}`);
    }
}

function sumArray(arr) {
    let sum = 0;
    arr.forEach(i => {
        sum += i;
    });
    return sum;
}

function sumArray2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function sumArray3(arr) {
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }
    return sum;
}

function largar() {
    for (let i = 1; i <= 29; i++) {
        console.log("quero largar");
    }
}

largar();
