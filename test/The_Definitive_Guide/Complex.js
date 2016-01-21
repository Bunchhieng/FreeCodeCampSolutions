/**
 * Created by Bunchhieng on 1/18/2016.
 */
function Complex(real, imaginary) {
    // Class properties
    this.x = real;
    this.y = imaginary;
}

// Instance methods
Complex.prototype.magnitude = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
Complex.prototype.negative = function () {
    return new Complex(-this.x, -this.y);
};
Complex.prototype.add = function (that) {
    return new Complex(this.x + that.x, this.y + that.y);
};
Complex.prototype.multiply = function (that) {
    return new Complex(this.x * that.x - this.y * that.y, this.x * that.y + this.y * that.x);
};
Complex.prototype.toString = function () {
    return "{" + this.x + "," + this.y + "}";
};
Complex.prototype.equals = function (that) {
    return this.x == that.x && this.y == that.y;
};
Complex.prototype.valueOf = function () {
    return this.x;
};

// Class methods
Complex.sum = function (a, b) {
    return new Complex(a.x + b.x, a.y + b.y);
};
Complex.product = function (a, b) {
    return new Complex(a.x * b.y - a.y * b.y, a.x * b.y + a.y * b.y);
};
// Class properties
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 1);
Complex.I = new Complex(0, 1);