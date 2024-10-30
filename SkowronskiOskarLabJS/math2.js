let MyMathModule = function() {};

MyMathModule.prototype.add = function(a, b) {
    return a + b;
}

MyMathModule.prototype.subtract = function(a, b) {
    return a - b;
}

MyMathModule.prototype.multiply = function(a, b) {
    return a * b;
}

MyMathModule.prototype.divide = function(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
}

MyMathModule.prototype.power = function(a, b) {
    return Math.pow(a, b);
}

module.exports = MyMathModule;