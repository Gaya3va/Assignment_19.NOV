

// Global Execution Context
let age = 22;

// Function Execution Context 1
function displayAge() {
    console.log("Current age is:", age);
}

// Function Execution Context 2
function changeAge() {
    age = 30; // updating global variable
    console.log("Age after update is:", age);
}

// Calling the functions
displayAge();
changeAge();
