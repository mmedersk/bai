// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let getArea = () => {
    const p = (a + b + c) / 2;
    const pole = Math.sqrt(p *(p - a) * (p - b) * (p - c));
    return `Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${pole}`;
};

console.log( getArea() );