function getLength(arg) {
    if (typeof arg === "string" || Array.isArray(arg)) {
        return arg.length;
    }
    throw new Error();
}
// Test your implementation:
console.log(getLength("TypeScript")); // 10
console.log(getLength([1, 2, 3, 4, 5])); // 5
