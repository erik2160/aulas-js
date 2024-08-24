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

function sumArrayWithForEach(arr) {
    let sum = 0;
    arr.forEach(i => {
        sum += i;
    });
    return sum;
}

function sumArrayWithFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function sumArrayWithForOf(arr) {
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }
    return sum;
}

sum(2);
multiply(10);
skipNumber(3);
console.log(sumArrayWithForEach([20, 10, 5]));
console.log(sumArrayWithFor([20, 10, 5]));
console.log(sumArrayWithForOf([20, 10, 5]));
