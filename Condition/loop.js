//folder condition > loop.js
//LOOP
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
//dengan loop kita tidak perlu console.log satu persatu
//code diatas bisa diubah menjadi
//1. FOR LOOP
//step for loop
//1. statement 1 : membuat/mengupdate sebuah variabel
//2. statement 2 : pengecekan condition
//3. jika condition statement kedua true, maka block of code dijalankan
//4. statement 3 melakukan increment atau decrement postfix
//5. ulang dari step 2

// cara baca i sama dengan 1, i lebih kecil/sama dengan 10, i ditambah 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//let i = 1 pada for loop bisa digunakan lagi di contoh while loop
//sebabnya karena yang for loop ada didalam kurung, cuman untuk sekali pakai
//tidak digunakan seterusnya
//infinite looping - membuat website crash - penyebabnya i>0
//for (let i = 1; i > 0; i++ ) {
// console.log(i, "INI FOR LOOP"); }

//2. WHILE LOOP
//step while loop
//1. pengecekan condition
//2. jika pengecekan condition true maka jalankan block of code
//3. ulang dari step 1
let i = 1;
while (i <= 10) {
  console.log(i, "INI WHILE LOOP");
  i++;
}

//3. DO WHILE LOOP
//Step do while loop
//1. jalankan block of code didalam do
//2. pengecekan condition
//3. jika pengecekan condition true maka ulang step 1

i = 1; //nilai let i di update agar bisa digunakan lagi

do {
  console.log(i, "INI DO WHILE LOOP");

  i++;
} while (i <= 10);

//BREAK
//menghentikan OPERASI
let x = 1;
while (true) {
  console.log(x);
  if (x === 100) break;
  x++;
}
//kalo diatas tak ditambah break akan jadi infinite

// CONTINUE
// melanjutkan sequence
for (let y = 1; y <= 10; y++) {
  if (y % 2 === 0) continue;
  //akan menjalankan block of code if jika angka genap
  console.log(y);
  //code diatas akan dijalankan jika if diatas mereturn false
}
