function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
// Test your implementation:
sum(1, 2, 3, 4, 5); // 15
sum(1, 2, 3); // 6
