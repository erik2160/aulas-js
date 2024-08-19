const numbers = [1, 2, 0, -4, 999];

numbers.forEach(num => {
    if (num >= 1) {
        console.log(`The number ${num} is positive.`);
    } else if (num == 0) {
        console.log(`The number ${num} is zero.`);
    } else {
        console.log(`The number ${num} is negative.`);
    }
});