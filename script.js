// Task 1
const a = 2;
const b = 4;

console.log(`
    Task 1
    a + b = ${a + b} 
    a - b = ${a - b}
    a * b = ${a * b}
    a / b = ${a / b}
`);

// Task 2
const radius = 4;

const perimeter = 2 * Math.PI * radius;
const area = Math.PI * radius * radius;

console.log(`
    Task 2
    Perimetr: ${perimeter}
    Area: ${area}
`);

// Task 3
const m = +prompt('Set a value for variable "m" (Task 3)');
let n;

if (!Number.isInteger(m)) {
    n = 'The "m" variable is not integer';
} else if (m > 0) {
    n = "n = 1";
} else if (m === 0) {
    n = "n = 0";
} else {
    n = "n = -1";
}

console.log(`
    Task 3
    ${n}
`);

// Task 4
const num = +prompt("Enter a number to check for even or odd (Task 4)");

if (num % 2 === 0) {
    console.log(`
    Task 4
    The number is odd
    `);
} else {
    console.log(`
    Task 4
    The number is even
    `);
}

// Task 5
let sum = 0;
let product = 1;

for (let i = 1; i <= 10; i++) {
    sum += i;
    product *= i;
}

console.log(`
    Task 5
    Sum = ${sum}
    Product = ${product}
`);

// Task 6
const nVar = +prompt('Set a value for variable "n" (Task 6)');

const sumOfRow = (n) => {
    let term = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += term;
        term = term * 10 + 1;
    }

    return sum;
}

const result = sumOfRow(nVar);
console.log(`
    Task 6
    Sum of row: ${result}
`);

//Task 7
const yearVar = +prompt('Enter a year to chek wether it a leap year (Task 7)');

const isLeap = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const result7 = isLeap(yearVar);
console.log(`
    Task 7
    ${result7}
`);

//Task 8
function arrayCalculations(arr) {
    const positiveNumbers = arr.filter(num => num > 0);
    const negativeNumbers = arr.filter(num => num < 0);

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sumPositive = positiveNumbers.reduce((acc, curr) => acc + curr, 0);
    const productNegative = negativeNumbers.reduce((acc, curr) => acc * curr, 1);

    return {
        max,
        min,
        sumPositive,
        productNegative,
        negativeCount: negativeNumbers.length,
        positiveCount: positiveNumbers.length
    };
}

const numbersArray = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]; 
const result8 = arrayCalculations(numbersArray);
console.log('Task 8', result8);
