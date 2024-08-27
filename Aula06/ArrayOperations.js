let nomes = ['Erik', 'Aysha', 'Rafaela', 'Gabriela', 'Victor', 'Pedro'];

console.log(insertNameAtFinal('Michele'));
console.log(removeFirstName());
console.log(getArrLength());
console.log(arrToUpperCase(nomes));

function insertNameAtFinal(name) {
    nomes.push(name);
    return nomes;
}

function removeFirstName() {
    nomes.shift();
    return nomes;
}

function getArrLength() {
    return `Array length: ${nomes.length}`;
}

function arrToUpperCase(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}