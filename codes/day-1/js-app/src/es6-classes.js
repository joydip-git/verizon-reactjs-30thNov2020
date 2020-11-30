//9. class keyword
class person {
    constructor(name, id, salary) {
        this.personName = name;
        this.personId = id;
        this.personSalary = salary;
    }
    print() {
        return `Name: ${this.personName}, Id:${this.personId} and Salary:${this.personSalary}`;
    }
}
console.log(person.prototype)
class trainer extends person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.subjectToTeach = subject;
    }
    print() {
        return `${super.print()}, subject: ${this.subjectToTeach}`
    }
}
console.log(trainer.prototype)

const testObj = new trainer('joy',1,1000,'React JS')
console.log(testObj)
testObj.print();