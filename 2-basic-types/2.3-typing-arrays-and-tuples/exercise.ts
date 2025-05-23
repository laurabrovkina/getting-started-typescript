// Exercise: Typing Arrays in TypeScript

// 1. Declare an array of numbers called `ages` and initialize it with the values 25, 30, 35, and 40.
const ages: Array<number> = [25, 30, 35, 40];
// 2. Declare an array of strings called `names` and initialize it with the values "Alice", "Bob", and
// "Charlie".
const names: Array<string> = ["Alice", "Bob", "Charlie"];
// 3. Declare a tuple called `product` that contains a string and a number.
// Initialize it with the values "Boat" and 25.
const product: Array<number | string> = ["Boat", 25];
const product2: [number, string] = [25, "Boat"];
// 4. Declare an array of tuples called `coordinates` where each tuple contains two numbers (x and y).
//    Initialize it with the following values:
//    - (10, 20)
//    - (30, 40)
//    - (50, 60)
const coordinates: [number,number][] = [[10,20],[30,40],[50,60]];
// 5. Use the spread syntax to combine the two array types below into a new array type called `combined`.
type Continents = ["Europe", "Africa"];
type Oceans = ["Pacific", "Atlantic"];
type combined =[...Continents, ...Oceans];
