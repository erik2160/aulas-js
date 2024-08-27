let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
}

console.log(addProperty(car, "color", "red"));
console.log(removeProperty(car, "year"));
console.log(showProperty(car, "brand"), showProperty(car, "model"));

function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}   

function addProperty(obj, prop, value) {
    obj[prop] = value;
    return obj;
}

function showProperty(obj, prop) {
    return obj[prop];
}