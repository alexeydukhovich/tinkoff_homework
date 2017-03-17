let arr1 = [1, 3, 5, 7, 9];
let arr2 = [1, 2, 3, 4];

let count = {};

let result = arr1.concat(arr2).filter(
    function (number) {
        if (count[number] === 1) {
            count[number]++;
            return true;
        }
        if (count[number] === undefined) {
            count[number] = 1;
        }
        return false;
    });

alert(result);