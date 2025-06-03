//let kotakSepatu = "adidas";
// kotakSepatu = "nike";

//Array
const kotakSepatu = ["adidas", "nike"];
console.log(kotakSepatu);

const alphabet = ["A", "B", "C", "D"];
//A adalah index ke 0, B adalah index ke-1 dst
console.log(alphabet[3]); //output: D

//array build in method
alphabet.push("E"); //menambahkan elemen baru diakhir
console.log(alphabet);

alphabet.unshift("Z"); //menambahkan elemen baru diawal
console.log(alphabet);

alphabet.pop(); //menghapus elemen paling belakang
console.log(alphabet);

alphabet.shift(); //menghapus elemen paling depan
console.log(alphabet);
////
const angka = [];
for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i]);
  angka.push(i + 1);
}
console.log(angka);
angka.forEach((data) => console.log(data)); //untuk kalkulasi data

const loop = angka.map((value) => value);
console.log(loop);

for (let val of angka) {
  console.log(val);
}
