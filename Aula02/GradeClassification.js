const grades = [10, 45, 60, 70, 80, 90, 100];

grades.forEach(grade => {
    if (grade >= 90) {
        console.log(`The grade ${grade} is an A.`);
    } else if (grade >= 80) { 
        console.log(`The grade ${grade} is a B.`);
    } else if (grade >= 70) {
        console.log(`The grade ${grade} is a C.`);
    } else if (grade >= 60) {
        console.log(`The grade ${grade} is a D.`);
    } else {
        console.log(`The grade ${grade} is an F.`);
    }
});
