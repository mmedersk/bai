var arr = [];

const fillArray = () => {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 20) + 5);
    }
}

const displayArray = () => {
    arr.forEach(item => console.log(item));
}

fillArray();
displayArray();