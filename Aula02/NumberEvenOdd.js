const numbers = [1, 2, 0, -4, 999];

numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(`The number ${num} is even.`);
    } else {
        console.log(`The number ${num} is odd.`);
    }
});