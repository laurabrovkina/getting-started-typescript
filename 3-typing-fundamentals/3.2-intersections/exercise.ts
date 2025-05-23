// Exercise: Type Intersections in TypeScript

// Question 1:
// Given the two interfaces below, create a new type `Staff`
// that's an intersection of `Person` and `Employee`.
// Then, create a variable `staff` of type `Staff` and assign some values to it.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type Staff = Person & Employee;

const staff: Staff = {
  employeeId: 32,
  age: 23,
  name: 'John Doe',
  department: "Finance"
}
