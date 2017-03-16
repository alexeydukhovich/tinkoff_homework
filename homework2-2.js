let arr1 = [1, 3, 5, 7, 9];
let arr2 = [1, 2, 3, 4];

let arr_with_count = [];

let result = arr1.concat(arr2).filter(
    (number) =>
        (arr_with_count[number] === undefined) ? 
            !(arr_with_count[number] = 1) : (arr_with_count[number]++ === 1)
    );

alert(result);