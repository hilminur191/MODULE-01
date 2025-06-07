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