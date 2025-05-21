// Exercise: Typing Objects in TypeScript

// Question 1: Create an object literal representing a book with the following properties:
// - title: string
// - author: string
// - pages: number
let book = { title: "Title", author: "User", pages: 12 };
// Question 2: If you try adding another property to the object literal book object, does TypeScript allow it?
// No
//book.new = ""; - has an error
// Question 3: Define an interface `Car` with the following properties:
// - make: string
// - model: string
// - year: number
// Then, create an object that conforms to this interface.
interface Car {
    make: string;
    model: string;
    year: number;
}

const Car1: Car2 = {
    make: "Germany",
    model: "Audi",
    year: 1970
}

// Question 4: Define a type alias called `Car2` with the same shape as `Car`.
// Then, create an object that conforms to this type alias.
type Car2 = {
    make: string;
    model: string;
    year: number;
}

const newCar: Car2 = {
    make: "Germany",
    model: "Audi",
    year: 1970
}

// Question 5: Create an interface called `Car3` with the same shape as `Car`,
// but allow any additional properties to be added.
interface Car3 {
    make: string;
    model: string;
    year: number;
    [key: string]: any;
}

const newCar2: Car3 = {
    make: "Germany",
    model: "Audi",
    year: 1970,
    color: "red"
}