const days = [1, 3, 8, 7];

days.forEach(day => {
    switch (day) { 
        case 1:
            console.log(`The number ${day} is a Monday.`);
            break;
        case 2:
            console.log(`The number ${day} is a Tuesday.`);
            break;
        case 3:
            console.log(`The number ${day} is a Wednesday.`);
            break;
        case 4:
            console.log(`The number ${day} is a Thursday.`);
            break;
        case 5:
            console.log(`The number ${day} is a Friday.`);
            break;
        case 6:
            console.log(`The number ${day} is a Saturday.`);
            break;
        case 7:
            console.log(`The number ${day} is a Sunday.`);
            break;
        default:
            console.log(`The number ${day} is a invalid day.`);
            break;
    }
});