//Here's a JavaScript function named divide that handles division 
//by zero gracefully by throwing an appropriate error message:

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    } else {
        return a / b;
    }
}

// Example usage:
try {
    console.log(divide(10, 2)); // Output: 5
} catch (error) {
    console.error(error.message); // Output: Division by zero is not allowed.
}

try {
    console.log(divide(8, 0)); // Throws an error
} catch (error) {
    console.error(error.message); // Output: Division by zero is not allowed.
}
