function my_bind(func, ctxt) {
    return function()
    {
        return func.apply(ctxt, arguments)
    }
};


//example
let foo = function (nickname) {
    alert(this.name + ' ' + nickname);
}

let human = {name: 'Вася'};
my_bind(foo, human)("alex08256");