//function
//function declaration
function pertambahan(a, b) {
  console.log(a + b);
}

pertambahan(5, 6);
pertambahan(1, 1);

//function expression
const pengurangan = function (a, b) {
  console.log(a - b);
};
pengurangan(7, 6);
pengurangan(4, 1);

//function arrow
const perkalian = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("masukan angka yang benar");
  } else {
    console.log(a * b);
  }
};
perkalian(6, 6);

function pembagian(a, b) {
  let hasil = 0;
  return a / b;
}

let hasil = pembagian(6, 2);
console.log(hasil);

//default parameter
function modulo(a, b = 5) {
  return a % b;
}
console.log(modulo(10)); //nilai a=10 nilai b=5(default rumus)
console.log(modulo(10, 3)); //nilai a=10 nilai b=3

// rest parameter
function message(a, b, ...c) {
  console.log(a, "ini parameter a");
  console.log(b, "ini parameter b");
  console.log(c, "ini parameter c");
}

console.log(message("hello", "world", "Nama", "Saya", "Budi"));
//LATIHAN 1 =================
//create a FUNCTION THAT CAN CREATE a triangle pattern to the height
//we provide like the following :

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
//parameters : height (triangle height)
//input : 5

function createTrianglePattern(height) {
  let pattern = "";
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern = pattern.trim() + "\n"; // Remove trailing space and add newline
  }
  return pattern;
}

let result1 = createTrianglePattern(5);
console.log(result1);

//LATIHAN 2 =================
//Create a function that can create a triangle pattern according to the height we provide like the
//following

//01
//02  03
//04  05  06
//07  08  09  10
//Parameters : height → triangle height

function createNumberTriangle(height) {
  let pattern = "";
  let counter = 1;

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      // Format number with leading zero if needed
      let formatted = counter < 10 ? "0" + counter : counter;
      pattern += formatted + "  ";
      counter++;
    }
    pattern = pattern.trimEnd() + "\n"; // Trim trailing space and add newline
  }

  return pattern;
}

let result = createNumberTriangle(4);
console.log(result);

//LATIHAN 3 =================
//Create a function that can loop the number of times according to the input we provide, and will
//replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
//"FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result.join(", ");
}
console.log(fizzBuzz(6)); // Output: 1, 2, Fizz, 4, Buzz, Fizz
console.log(fizzBuzz(15)); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

//LATIHAN 4 ===================
//Create a function to calculate Body Mass Index (BMI)
//Formula : BMI = weight (kg) / (height (meter))²
//Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”z

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(calculateBMI(60, 1.7)); // Output: "ideal"
console.log(calculateBMI(80, 1.6)); // Output: "very overweight"
console.log(calculateBMI(100, 1.6)); // Output: "very overweight"

//LATIHAN 5 ========================
//Write a function to remove all odd numbers in an array and return a new array that contains even
//numbers only
//Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = filterEvenNumbers(originalArray);
console.log(evenArray); // Output: [2, 4, 6, 8, 10]

//LATIHAN 6 =========================
//Write a function to split a string and convert it into an array of words
//Example : “Hello World” → [“Hello”, “World”]

function splitIntoWords(str) {
  return str.split(" ");
}

const sentence = "Hello World";
const words = splitIntoWords(sentence);
console.log(words); // Output: ["Hello", "World"]
