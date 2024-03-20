// Function to generate Fibonacci series up to numth element
function generateFibonacciSeries(num) {
    let fibonacciSeries = [];
    if (num === 1) {
        fibonacciSeries.push(0);
    } else if (num >= 2) {
        fibonacciSeries.push(0, 1);
        for (let i = 2; i < num; i++) {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
        }
    }
    return fibonacciSeries;
}

//Example of usage
console.log("Fibonacci seriesS up to 8th element:", generateFibonacciSeries(8));