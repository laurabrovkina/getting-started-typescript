// 1. Define an enum called Direction with four possible values: Up, Down, Left, Right
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// 2. Create a function called `move` that takes a Direction enum as an argument and uses a switch to return a corresponding string like "Moving up!"
function move(direction: Direction): string{
    switch (direction){
        case Direction.Up:
            return "Moving up!"
        case Direction.Down:
            return "Moving down!"
        case Direction.Left:
            return "Moving left !"
        case Direction.Right:
            return "Moving right !"
        default:
            const _exhausted : never = direction;
            return _exhausted;
    }
}

// 3. Define an enum called Status with explicit values: Success = 1, Failure = -1, Pending = 0
enum Status {
    Pending = 0,
    Success = 1,
    Failure = -1
}

// 4. Create a function called getStatusMessage that accepts the Status enum as an argument and returns a corresponding message like
// "Operation was successful! or "Operation failed!"
function getStatusMessage(status: Status) : string{
    switch(status){
        case Status.Pending:
            return "Operation pending!";
        case Status.Success:
            return "Operation success!";
        case Status.Failure:
            return "Operation fail!";
    }
}

// 5. Implement the same feature, but this time use a object literal instead of an enum
const Direction1 = {
    Up: "up",
    Down: "down",
    Left: "left",
    Right: "right"
}

const Status1 = {
    Pending: 0,
    Success: 1,
    Failure: -1
}

// 6. Create a function called getStatusMessageLiteral that accepts the statusLiteral as an argument and returns a corresponding message
function move1(direction: keyof typeof Direction1){
    switch (direction){
        case "Up":
            return "Moving up!"
        case "Down":
            return "Moving down!"
        case "Left":
            return "Moving left !"
        case "Right":
            return "Moving right !"
        default:
            const _exhausted : never = direction;
            return _exhausted;
    }
}

function getStatusMessage1(status: keyof typeof Status1){
    switch(status){
        case "Pending":
            return "Operation pending!";
        case "Success":
            return "Operation success!";
        case "Failure":
            return "Operation fail!";
    }
}