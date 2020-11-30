class employee {
    empName;
    empId;
    empBasic;
    empDa;
    empHra;
    constructor(name, id, basic, da, hra) {
        this.empName = name;
        this.empId = id;
        this.empBasic = basic;
        this.empDa = da;
        this.empHra = hra;
    }
    static show() {
        console.log('static show')
    }
    calculateSalary() {
        console.log(this)
        return this.empBasic + this.empDa + this.empHra;
    }
}
//employee.prototype.calculateSalary = function(){.....}
class developer extends employee {
    empIncentive;
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        this.empIncentive = incentive;
    }
    calculateSalary = () => {
        console.log(this)
        return super.calculateSalary() + this.empIncentive;
    }
}
//developer.prototype.__proto__ = employee.prototype
const anilObj = new developer('anil', 1, 1000, 2000, 3000, 4000);
const joydipObj = new developer('joy', 2, 1200, 2200, 3200, 4200);
//console.log(anilObj.calculateSalary())
//anilObj.show();

function printSalary(salaryFnRef) {
    console.log(this)
    console.log(salaryFnRef())
}

printSalary(anilObj.calculateSalary)
printSalary(joydipObj.calculateSalary)



