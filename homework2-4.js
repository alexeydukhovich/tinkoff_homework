// как оказалось "стрелочная функция не имеет собственного объекта arguments"
let my_bind = (func, ctxt) => (function() {return func.apply(ctxt, arguments)});


//example
let foo = function (nickname) {
    alert(this.name + ' ' + nickname);
}

let human = {name: 'Вася'};
my_bind(foo, human)("alex08256");