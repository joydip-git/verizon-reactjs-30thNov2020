const { developer } = require('./developer')

const anilObj = new developer('anil', 1, 1000, 2000, 3000, 4000);
const joydipObj = new developer('joy', 2, 1200, 2200, 3200, 4200);

console.log(anilObj.calculateSalary())
console.log(joydipObj.calculateSalary())
const add = (a, b) => {
    console.log(a + b)
}
add(10, 20);
//console.log(window ? window : 'NA')
//console.log(global ? global : 'NA')
console.log(module)