let decimal = +prompt('Введите целое положительное число:');

function recursive(remain) {
    if (remain === 0)
        return '0';
    return (remain === 1) ? ('1') : (recursive(Math.floor(remain / 2)) + (remain % 2));
}

alert(recursive(decimal));