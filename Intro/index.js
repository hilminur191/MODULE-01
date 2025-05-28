// ctrl + s untuk menyimpan, jika tidak muncul
// ctrl + ` untuk memunculkan terminal
// ctrl + shift + p = memunculkan search bar
// ; adalah akhir dari sebuah syntax
// console mengacu pada sebuah terminal
// .log = sebuah console bisa membuat sebuah logging / catatan
// Hello world = catatan yang ditampilkan
console.log("Hello World");

// variable
// tempat penyimpanan data kita
// rules pembuatan variabel
// 1. hanya boleh menggunakan karatkter, angka, simbol $ atau _
let $angka = 5;
let _angka = 5;
// 2.Karakter pertama tidak boleh angka
// let 5angka= 5; akan ERROR
// 3. penamaan variabel case sensitive
let text = "Hello";
let Text = "Hello";
//4. Tidak boleh menggunakan kata yang sudah di reserved
// let let = ""; akan error karena let digunakan untuk mendeclare sebuah variable

// DECLARE VARIABLE DENGAN CONST
// CONST ATAU CONSTANTA
// CARA MENDECLARE SEBUAH VARIABLE DIMANA VALUE DIDALAMNYA TIDAK BISA/TIDAK BOLEH DIRUBAH
const kotakSepatuAdidas = "Adidas";
console.log(kotakSepatuAdidas);

// DECLARE VARIABEL MENGGUNAKAN LET
// CARA MENDECLARE SEBUAH VARIABLE DIMANA VALUE DIDALAMNYA BISA/ BOLEH DIRUBAH
let kotakSepatuNike = "Nike";
console.log(kotakSepatuNike);

//ketika mau merubah value tak perlu memasukkan perintah "let"
kotakSepatuNike = "Nike 2";
console.log(kotakSepatuNike);

// DECLARE VARIABEL MENGGUNAKAN VAR
// digunakan untuk membuat global variabel - didalam javascript HAMPIR TIDAK PERNAH digunakan
// kekurangannya jika ditimpa bisa merusak code, misal stlh line 31 kita input var kotaksepatupuma = "puma2"
// hasilnya akan ketimpa karena sama-sama kotaksepatupuma
var kotakSepatuPuma = "Puma";
console.log(kotakSepatuPuma);

//DATA TYPES

//PRIMITIVE DATA TYPES

// STRING (MENYIMPAN SEBUAH TEXT ATAU KALIMAT)
// terdapat "" pada sebuah string
// intinya kalau ada tanda "" berati itu string
const _string = "ini sebuah text";
console.log(_string);

//Number (menyimpan sebuah angka, float, decimal)
const _number = 5.6241;
console.log(_number);

// BOOLEAN (HANYA BISA MENYIMPAN VALUE ANTARA TRUE ATAU FALSE)
const _boolean = true;
console.log(_boolean);

// NULL
const _null = null;
console.log(_null);

//UNDEFINED
let _undefined;
console.log(_undefined);
//untuk mengecek tipe data pada sebuah variable
console.log(typeof _null);
// kata _null bisa diganti dengan yang lain misal _boolean dll

// NON-PRIMITIVE DATA TYPES

//array
//object

//DATE
let hariIni = new Date();
console.log(hariIni);

//Built-in method string
// syntax terdiri dari value tipe data itu sendiri + . + nama built in methodenya
let $string = "Hello World";
console.log($string);

//merubah karakter pada string menjadi huruf besar
console.log($string.toUpperCase());

//merubah karakter pada string menjadi huruf kecil
console.log($string.toLowerCase());

// fungsi menghilangkan spasi didepan dan dibelakang
let $string2 = " Helloo Worlde ";
console.log($string2.trim());

// fungsi mereplace karakter, merubah karakter e menjadi a
// hanya merubah karakter pertama yang ditemukan
console.log($string.replace("e", "a"));
// merubah setiap karakter yang diinginkan
console.log($string.replace(/l/gi, "b"));

//number built in method
const $number = 5.246531;
console.log(typeof $number);

//konversi tipe data angka menjadi string
console.log(typeof $number.toString());

//mengambil beberapa angka dan membulatkan
console.log($number.toFixed(3));

//menggunakan built in method object math
// lima pangkat dua
console.log(Math.pow(5, 2));
console.log(Math.PI)

//date built in method
const $date = new Date();
console.log($date);

console.log($date.getFullYear());
//menemukan bulan perlu ditambah 1 karena bulan dalam javascript dimulai dari 0 sampai sebelas
console.log($date.getMonth() + 1);
console.log($date.getDate());
//menemukan hari keberapa dalam suatu minggu, misal kalo senin hari pertama
console.log($date.getDay());
console.log($date.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }));

//chaining built in method
const number = 2;
console.log(number.toString().replace(2, "a"));

//operasi matematika
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
//modulus
console.log(5 % 5);
console.log(30 % 5);
console.log(27 % 5);
//pemangkatan
console.log(5 ** 5);

//modify in place
let x = 5;
x +=10; // x = x + 10; // x = 5 + 10
console.log(x);

x -= 10;
console.log(x);

//concat atau penggabungan string
console.log("HELLO" + "WORLD")
let i = "HELLO";
i += "WORLD";
console.log(i);

//increment dan decrement (+1 atau -1)
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x - 1
console.log(x);

// postfix dan prefix
// postfix
//tampilkan terlebih dahulu baru ditambahkan atau dikurangi
console.log(x);
console.log(x++);
console.log(x);

//prefix
//menambahkan/mengurangi dulu baru ditampilkan
console.log(x);
console.log(--x);

//template literal
const message = "Greeting";
console.log(message + ", Budi");
console.log(`${message}, Budi`);

const z = "5";
console.log(5 + z);
console.log(5 + Number(z));