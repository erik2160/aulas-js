const ages = [18, 73, 7, 35]

ages.forEach(age => {
    if (age < 11) {
        console.log(`The person of age ${age} is a kid.`);
    } else if ((age >= 12) && (age <= 18)) {
        console.log(`The person of age ${age} is a teen.`);
    } else if ((age >= 19) && (age <= 60)) { 
        console.log(`The person of age ${age} is an adult.`);
    } else {
        console.log(`The person of age ${age} is an elderly.`);
    }
});