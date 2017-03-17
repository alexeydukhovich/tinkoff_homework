let decimal = +prompt('Введите целое положительное число:');

function recursive(remain) {
    return (remain <= 1) ? (''+remain) : (recursive(Math.floor(remain / 2)) + (remain % 2));
}

alert(recursive(decimal));