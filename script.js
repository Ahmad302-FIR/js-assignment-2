// Step 2: JavaScript Data Type
let name = "Muhammad Ahmed";
let city = "Karachi";
let age = 18;
let price = 2500;
let isStudent = true;
let result;
let address = null;

// Step 3: Check Data Type of Variables

console.log("Type of name:", typeof name);
console.log("Type of city:", typeof city);

console.log("Type of age:", typeof age);
console.log("Type of price:", typeof price);

console.log("Type of isStudent:", typeof isStudent);

console.log("Type of result:", typeof result);

console.log("Type of address:", typeof address);
// Step 4: Convert Data Types
let stringNumber = "25";
let convertedNumber = Number(stringNumber);

let numberValue = 100;
let convertedString = String(numberValue);

let stringBoolean = "true";
let convertedBoolean = Boolean(stringBoolean);

// Step 5: Observe the Output

console.log("Converted Number:", convertedNumber);
console.log("Type:", typeof convertedNumber);

console.log("Converted String:", convertedString);
console.log("Type:", typeof convertedString);

console.log("Converted Boolean:", convertedBoolean);
console.log("Type:", typeof convertedBoolean);

// Step 6: Practice Task (Important)
let wrongNumber = Number("abc");
console.log("Convert 'abc' to number:", wrongNumber);

console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(1):", Boolean(1)); // true

