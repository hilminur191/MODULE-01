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