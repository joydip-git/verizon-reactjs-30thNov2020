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
        return this.empBasic + this.empDa + this.empHra;
    }
}

module.exports = {
    employeeCls: employee
}