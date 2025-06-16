let total = 150;
console.log("Total belanja:", total);
total = 160;
console.log("Total belanja :", total);
let nama = "Ani",
  umur = 21;
console.log(`nama: ${nama}, umur: ${umur}`);
let user = { nama: "Doni", umur: 30 };
console.log(user);
let x = 10,
  y = 15;
console.log("nilai x:", x, "|nilai y:", y);
for (let i = 0; i < 3; i++) {
  console.log(`Iterasi ke-${i}`);
}
let siswa = [
  { nama: "Budi", nilai: 80 },
  { nama: "Siti", nilai: 90 },
];
console.table(siswa);
let siswi = [
  { nama: "Dinda", tinggi: 170 },
  { nama: "Lisa", tinggi: 168 },
];
console.table(siswi);
//latihan boolean
let usia = 30;
let bolehMasuk = usia >= 25;
console.log(usia);
console.log("Boleh masuk?", bolehMasuk);
//latihan boolean dalam kondisi
let loginSukses = true;

if (loginSukses) {
  console.log("Selamat datang!");
} else {
  console.log("Login gagal.");
}
//arti tanda
// =	Assignment (penugasan)	Memberikan nilai ke variabel
// ==	Loose equality (sama)	Membandingkan nilai saja, tapi bisa beda tipe
// ===	Strict equality (sama persis)	Membandingkan nilai dan tipe data harus sama
let number = 5;
console.log(typeof number);
//string built in method
let text = "hello world";
console.log(text.toUpperCase());
console.log(text.replace("world", "bani"));
console.log(text.split(" "));

let text1 = "JavaScript";
console.log(text1.slice(0, 5));

let now = new Date();
let jan01_1970 = new Date(0);
let jan02_1970 = new Date(24 * 3600 * 1000);
let date = new Date("2024-01-23");
console.log(now);
console.log(jan01_1970);
console.log(jan02_1970);
console.log(date);
//////
let age = 15;
if (age >= 17) {
  console.log("You can create an ID card");
} else {
  console.log("You are not old enough to create an ID card");
}
console.log(Boolean(0));
console.log(Boolean("Hallo"));
console.log(Boolean([]));

let input = 9;
let limit = 10;

for (let i = 1; i <= 10; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

function printTriangle(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row.trim());
  }
}

printTriangle(4);

function findMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(findMax([20, 79, 98, 12]));

function printTriangleNumber(height) {
  let counter = 1;
  for (i = 1; i <= height; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      let formatted = counter < 10 ? "0" + counter : counter;
      row += formatted + " ";
      counter++;
    }
    console.log(row.trim());
  }
}

printTriangleNumber(4);
///////////////////////////////////////////////////////////////////////

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
      result.push(i.toString());
    }
  }
  return result;
}
console.log(fizzBuzz(6));
console.log(fizzBuzz(15));
//////////////////////////////////////////////////////////
function BodyMassIndex(weight, height) {
  let BMI = weight / (height * height);
  if (BMI < 18.5) {
    return "less weight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "ideal";
  } else if (BMI >= 25 && BMI <= 29.9) {
    return "overweight";
  } else if (BMI >= 30 && BMI <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(BodyMassIndex(45, 1.6));
////////////////////////////////////////////////////////
function removeOddNumbers(arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
}

const angk4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil7 = removeOddNumbers(angk4);
console.log(hasil7);

/////////////////////////////////////////////////////////

function removeOdd(arr) {
  let result = [];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

const angka45 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil8 = removeOddNumbers(angka45);
console.log(hasil8);

/////////////////////////////////////////////////
function splitToWord(text) {
  return text.split(" ");
}

console.log(splitToWord("Hello World"));
console.log(splitToWord("Nama Saya Nurbani"));
