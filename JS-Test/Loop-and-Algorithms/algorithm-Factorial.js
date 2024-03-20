// Function to calculate factorial of a non-negative integer
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

//Example of usage
console.log("Factorial of 5:", calculateFactorial(5)); // Output: 120