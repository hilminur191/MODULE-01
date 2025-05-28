//COMPARISON OPERATORS
let bool = true;

//equal to / sama dengan
console.log(5 == 5);
console.log(5 == "5");
console.log("apel" == "Apel");

//strick equal to / sama dengan
//mampu membedakan tipe data dan valuenya, string dan number dianggap beda
console.log(5 === "5");

// not equal to / tidak sama dengan
console.log(5 != 5);

//strict not equal to, tanda seru dibacanya tidak sama
console.log(5 !== "5");
console.log("apel" !== "jeruk"); // apakah apel beda dengan jeruk = true
console.log("apel" === "jeruk"); // apakah apel sama dengan jeruk = false

//greater than
console.log(5 > 6); //apakah lima lebih besar dari enam
console.log(5 > 5); //apakah lima lebih besar dari lima

//greater than or equal to
console.log(5 >= 5); // apakah 5 lebih besar atau sama dengan 5

//less than
console.log(5 < 6);
console.log(5 < 5);

// less than or equal to
console.log(5 <= 5); //apakah lima lebih kecil atau sama dengan 5

//if
let nilai = "C";
if (nilai === "B") {
  console.log("Good Result");
}
// yang if diatas gak akan ada hasilnya krn c tidak sama dg b
if (nilai === "C") {
  console.log("Standard Result");
  console.log("Remidial");
}

//else => penggunaan bersama dengan if
if (nilai === "A") {
  console.log("Excellent Result");
} else {
  console.log("Diperbaiki");
}

// ternary operator atau penyingkatan penulisan if else
console.log(nilai === "A" ? "Excellent Result" : "Diperbaiki");
// teks diatas baca: jika nilai = A maka excellent result, jika tidak = A maka diperbaiki

//else if
if (nilai === "A") {
  console.log("Excellent Result");
} else if (nilai === "B") {
  console.log("Good Result");
} else if (nilai === "C") {
  console.log("Average Result");
} else {
  console.log("Diperbaiki");
}

let angka = 10;
//menentukan angka genap atau ganjil
if (angka % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}

//switch / case
// fungsi if else tahu kapan hrs berhenti, kalo switch else tidak
// krn itu ditambah perintah break
nilai = "A";
switch (nilai) {
  case "A":
    console.log("Excellent Result");
    break;
  case "B":
    console.log("Good Result");
    break;
  case "C":
    console.log("Average Result");
    break;
  default:
    console.log("Poor Result");
}

//truethy and falsy
//truethy
console.log(Boolean(" "));
console.log(Boolean("b"));
console.log(Boolean(10));

//falsy
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

let input = "Hello";
console.log(Boolean(input));
if (input) {
  // jika input === true
  console.log(`input kamu ${input}`);
} else {
  console.log("Harap masukan input");
}

if (!input) {
  // jika input === false
  console.log("Harap masukan input");
} else {
  console.log(`input kamu ${input}`);
}
