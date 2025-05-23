// Even works if one of the interfaces had an extra property:
var user = { id: 1, name: "Cory", age: 30 };
// Allowed because the two interfaces have a compatible structure. But the age property is not used.
var product = user;
console.log(product);
// Error - No age property on Product.
// product.age;
