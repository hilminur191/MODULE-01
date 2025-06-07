//cara penulisan object
const sepatu = {
  nama: "adidas",
  harga: 50000,
  model: "Boost",
};

const sepatu2 = {
  nama: "NIKE",
  harga: 50000,
  model: "Boost",
};

console.log(sepatu);
console.log(sepatu2);

const mobil = {
  brand: "Toyota",
  model: "Alphard",
  harga: 50000,
  ignition() {
    return "Mobil menyala";
  },
};

console.log(mobil);
console.log(mobil.harga);
console.log(mobil.ignition());
mobil.color = "Red";

const { brand, model } = mobil;

//4 pilar oop = object oriented PROGRAMMING
//encapsulation
//membungkus data dengan method dalam satu unit
//inheritance
//mewariskan property dan method ke anaknya
//abstraction
//menyembunyikan cara kerja logic method
//polymorphism

//class
class Sepatu {
  nama;
  harga;
  model;

  constructor(paramNama, paramHarga, paramModel) {
    this.nama = paramNama;
    this.harga = paramHarga;
    this.model = paramModel;
  }
}

const newSepatu = new Sepatu("Adidas", 50000, "Boost");
newSepatu.nama = "Newera";
console.log(newSepatu);

const sepatu3 = new Sepatu("Puma", 4000, "Sneaker");
console.log(sepatu3);

class Car {
  brand;
  price;
  model;
  color;

  constructor(brand, price, model, color) {
    this.brand = brand;
    this.price = price;
    this.model = model;
    this.color = color;
  }
}

const BMW = new Car("BMW", 40000, "IX", "white");
console.log(BMW);

const namaSepatu = "Adidas"
const hargaSepatu = 50000;
const modelSepatu = "Boost";
//cara penulisan object
const sepatu4 = {
 nama: "adidas",
 harga: 50000,
 model: "Boost",
};

const sepatu5 = {
 nama: "NIKE",
 harga: 50000,
 model: "Boost",
};

console.log(sepatu4);
console.log(sepatu5);

const mobil = {
 brand1: "Toyota",
 model1: "Alphard",
 harga: 50000,
 ignition () {
  return "Mobil menyala";
 },
};

console.log(mobil);
console.log(mobil.harga);
console.log(mobil.ignition());
mobil.color = "Red";

const { brand1, model1 } = mobil;

//4 pilar oop = object oriented PROGRAMMING
//encapsulation
//membungkus data dengan method dalam satu unit
//inheritance
//mewariskan property dan method ke anaknya
//abstraction
//menyembunyikan cara kerja logic method
//polymorphism

//class
class Sepatu {
 nama;
 harga;
 model;

 constructor(paramNama, paramHarga, paramModel) {
  this.nama = paramNama;
  this.harga = paramHarga;
  this.model = paramModel;
 }
}

const newSepatu = new Sepatu("Adidas, 50000, "Boost");
newSepatu.nama = "Newera";
console.log(newSepatu);

const Sepatu4 = new Sepatu("Puma", 4000, "Sneaker");
console.log(Sepatu4);

class Car {
 brand;
 price;
 model;
 color;

 constructor(brand, price, model, color) {
  this.brand = brand;
  this.price = price;
  this.model = model;
  this.color = color;
 }
}

const BMW2 = new Car("BMW", 40000, "IX", "white");
console.log(BMW2);

/////////====///////////

class Product {
 nama;
 price;

 constractor(name, price) {
  this.name = name;
  this.price = price;
 }
}
//menambahkan spesifikasi produk TV
class TV extends Product {
 brand;
 constructor(name, price, brand) {
  super(name, price);
  this.brand = brand;
 }
}
//menambahkan spesifikasi produk Buku
class Buku extends Product {
 author;
 publisher;
 
 constructor(name, price, author, publisher) {
  super(name, price);
  this.author = author;
  this.publisher = publisher;
 }
}

const tv = new TV("Samsung", 20000, "Samsung");
console.log(tv);
const buku = new Product("Harry Potter", 50000, "JK Rowling", "Gramedia"); 
console.log(buku);

//polymorphism//
class Animal {
 makeAsound() {
  return "Bersuara";
 }
}

class Dog extends Animal {
 constructor() {
  super();
 }

 makeAsound() {
  return "Bark";
 }
}

class Cat extends Animal {
 constructor() {
  super();
 }

 makeAsound() {
  return "Meow";
 }
}

const anjing = new Dog();
console.log(anjing.makeAsound());

const kucing = new Cat();
console.log(kucing.makeAsound());

