let sum = function() {

    let value = 0;
    let return_func = function() {
        if (arguments.length === 0) {
            return value;
        }
        else {
            value += arguments[0];
            return return_func;
        }
    }

    if (arguments.length === 0) {
        return 0;
    }
    else {
        value = arguments[0];
        return return_func;
    }
}

alert(sum(1)(2)(3)());