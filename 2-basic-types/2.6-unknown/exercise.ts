// Exercise: Working with the `unknown` type in TypeScript

// 1. Declare a variable of type `unknown` and assign a value to it.
const myVariable: unknown = "2";
// 2. Write a function `isString` that takes an argument of type `unknown`
// and returns true if the argument is a string.
function isString(param: unknown) {
    return typeof param === "string";
}
// 3. Call the isString function above to check if the `unknownValue` is a string,
// and if so, log its length to the console.
if(isString(myVariable)) {
    console.log(myVariable.length);
}
else {
    console.log(myVariable + " is not a string");
}