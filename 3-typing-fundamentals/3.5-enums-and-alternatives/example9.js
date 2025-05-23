// Consider using a const object instead of an enum
var Colors = {
    Red: "red",
    Green: "green",
    Blue: "blue",
};
// To pass a list of colors to a function, use keyof typeof
function printColors(color) {
    console.log(color);
}
printColors("Red");
