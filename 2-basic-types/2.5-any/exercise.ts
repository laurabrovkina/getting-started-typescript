// Exercise: Understanding the `any` type in TypeScript

// 1. Declare a variable with the `any` type and assign it a string value.
let t: any = "string";
// 2. Reassign the variable to a number.
t = 2;
// 3. Reassign the variable to an object with a name property that's set to "TS".
t = { name: "TS"};
// 4. Create a function that accepts a parameter of type `any` and logs its type and value.
function LogAny(param): void {
    console.log(typeof param);
    console.log(param);
}
// 5. Call the function with different types of arguments (string, number, object, array).
LogAny(t);
LogAny("string");
LogAny(2);
LogAny([2, "hello"]);
// 6. Explain why using `any` can be both useful and potentially problematic in TypeScript.