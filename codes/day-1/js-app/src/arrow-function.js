const sample = function () {
    console.log(this)
    this.x = 10;
    //let ref = this;
    let test = () => {
        console.log(this)
        this.y = 20;
        //return (ref.x + this.y)
        return (this.x + this.y)
    }
    //test = test.bind(this);
    //console.log(test());
    //return this;
    return test;
}

var testFnRef = new sample();
const result = testFnRef();
console.log(result)