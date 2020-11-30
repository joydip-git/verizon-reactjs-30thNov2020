// console.log(x)
// var x; //declaration
// x = 10; //assignment
// console.log(x)
// var i;//declaration
// for (i = 0; i < 2; i++) {
//     var x;//declaration
//     x=20;//assignment
//     console.log(x)
// }
// console.log(x)

//variable hoisting
//1. prepration
/**
 * var globalContextObj = {
 *  
 *   i:undefined, 
 * }
 */

//2. execution
/**
 * var globalContextObj = {
 *   x:10,
 *   i:0, 
 *   a: 10 (readonly)
 * }
 */

//2015 (ES6 -- ECMAScript features)

//1. let keyword
//console.log(x)
let x; //declaration
x = 10; //assignment
console.log(x)

for (let i = 0; i < 2; i++) {
    let x;//declaration
    x = 20;//assignment
    console.log(x)
}
console.log(x)

//2. const keyword
const a = 10;
// a = 20;
console.log(a)

const numbers = [1, 2, 3]
//numbers = []
numbers.push(10)
numbers[0] = 100
console.log(numbers)

//3. templated string with interpolation
const trainername = 'joydip'
const trainerprofession = 'IT Consultant'
let design = `<table>
                <tr>
                    <td>Name</td>
                    <td>${trainername}</td>
                </tr>
                <tr>
                    <td>Profession</td>
                    <td>${trainerprofession}</td>
                </tr>
            </table>`

const div = document.getElementById('root')
div.innerHTML = design;


//object literal
const joydipObject = {
    //value properties
    name: 'Joydip',
    profession: 'IT Consultant',
    place: 'Bangalore',

    //functional property
    print: function () {
        // return 'Name: ' + this.name + ', Profession: ' + this.profession + ', Place: ' + this.place
        return `Name: ${this.name}, Profession: ${this.profession}, Place: ${this.place}`
    }
}

//console.log(joydipObject.name)
const info = joydipObject.print()
console.log(info)

joydipObject.subject = 'React JS'

for (let propName in joydipObject) {
    const propValue = joydipObject[propName]
    console.log(`${propName}:${propValue}`)
}

/*
const joydipCopy = {};

for (let propName in joydipObject) {
    const propValue = joydipObject[propName]
    joydipCopy[propName] = propValue
}
*/



//4. spread operator

//objects
const anilObj = { prop1: 'value1' }
const joydipCopy = { ...joydipObject, testProp: 'testValue', ...anilObj };

for (let propName in joydipCopy) {
    const propValue = joydipCopy[propName]
    console.log(`COPY prop-->${propName}:${propValue}`)
}

//arrays
const numbers1 = [10, 20]
const numbers2 = [30, 40]
const finalNumbers = [...numbers1, 100, 200, ...numbers2];

/*
for (let i = 0; i < numbers1.length; i++) {
    finalNumbers.push(numbers1[i])
}
finalNumbers.push(100, 200);
for (let i = 0; i < numbers2.length; i++) {
    finalNumbers.push(numbers2[i])
}
*/

console.log(finalNumbers)

//5. rest parameter
function add(x, y, z) {
    return (x + y + z)
}

function multiply(x, y) {
    return (x * y);
}

function calculate(fnRef, ...arr) {
    console.log(fnRef(arr[0], arr[1], arr[2]))
}

calculate(add, 10, 20, 30) //-->[10,20,30]<-- arr
calculate(multiply, 10, 20)//-->[10,20]<-- arr

//6. optional arguments with default value
function show(name, id = 0, salary = 0) {

}
show('joy')

//7. object destructuring
// const name = joydipObject.name;
// const place = joydipObject.place;
// const profession = joydipObject.profession;
// const print = joydipObject.print;
// const subject = joydipObject.subject;

const { name } = joydipObject;
//console.log(print())
console.log(name)

//8. arrow function
// function addFn(x, y, z) {
//     return (x + y + z)
// }
// const addFn = function (x, y, z) {
//     return (x + y + z)
// }

const addFn = (x, y, z) => console.log(x + y + z)

addFn(10, 20, 40)
//console.log(result)
