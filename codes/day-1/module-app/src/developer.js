const employeeModule = require('./employee')

class developer extends employeeModule.employeeCls {
    empIncentive;
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        this.empIncentive = incentive;
    }
    calculateSalary = () => {
        return super.calculateSalary() + this.empIncentive;
    }
}

module.exports = {
    developer: developer
}