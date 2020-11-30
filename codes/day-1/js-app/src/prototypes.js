//1. object literal syntax
var anilPersonObj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return `Name: ${this.name}, Id:${this.id} and Salary:${this.salary}`;
    }
}
console.log(anilPersonObj.__proto__)

//2. constructor function
function person(name, id, salary) {
    this.personName = name;
    this.personId = id;
    this.personSalary = salary;
    this.print = function () {
        return `Name: ${this.personName}, Id:${this.personId} and Salary:${this.personSalary}`;
    }
}
// console.log(person.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype)
person.prototype.show = function () {
    console.log('show')
}

const sunilPersonObj = new person('sunil', 2, 2000);
console.log(sunilPersonObj.__proto__)
sunilPersonObj.department = 'training'
console.log(sunilPersonObj.print())
sunilPersonObj.show();

//sunilPersonObj={}
/*sunilPersonObj={
    __proto__:person.prototype (__proto__:Object.prototype)
    personName:'sunil',
    personId:2,
    personSalary:2000,
    print:function(){
        //code}
    },
    department: 'training'
}
*/

// function Object(){

// }

// function add(x, y) {

// }
// console.log(add.prototype)
// const addObj = new add(10, 20)
// console.log(addObj.__proto__)
