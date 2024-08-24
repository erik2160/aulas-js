function getSizes(alt, lar, com) {
    let area = alt * lar;
    let volume = alt * lar * com;
    let sizes = [area, volume];
    return sizes;
}

console.log(getSizes(3,3,2));
console.log(getSizes(3, 2, 2,[0]));
console.log(getSizes(3, 3, 2[1]));