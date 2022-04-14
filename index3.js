// json

// syntax
// {
//     "nama": "Teknokasi",
//     "age": 22,
//     "gender": "male",
// }

// // data -> json itu selalu pakai double quotes
// "nama": "json"

// // json array -> [ ] -> square brackets
// ["apple", "mango", "banana"]

// // array -> object
// [
//     { "nama": "Teknokasi", "age": 22, "gender": "male"},
//     { "nama": "Teknokasi", "age": 22, "gender": "male"},
//     { "nama": "Teknokasi", "age": 22, "gender": "male"},
// ]

// access json data -> example
// json object
// const data = {
//     "nama": "Teknokasi",
//     "age": 20,
//     "hobby": {
//         "coding": true,
//         "gaming": false,
//         "sport": "futsal"
//     },
//     "class": ["C#", "javascript", "HTML/CSS"]
// }

// // access
// console.log(data.nama);
// console.log(data.hobby);
// console.log(data.hobby.gaming);
// console.log(data.class[2]);

// example 2
// json object
// const daftar = {
//     "nama": "Yu Lun",
//     "age": 21
// }

// // access json
// console.log(daftar.nama); // cara pertama
// console.log(daftar["nama"]); // cara kedua

// perbedaan object dan json

// json
// 1. selalu diikuti double quotes "".
// 2. json tidak bisa disertai function.
// 3. json bisa dibuat dengan menggunakan bahasa programming lain

// // object
// 1. tidak selalu pakai/boleh sama sekali tidak pakai double quotes ""
// 2. js object selalu disertai function
// 3. object hanya bisa digunakan di pemrograman js

// convert json ke object
// json data
// const dataJson =  '{ "nama": "Teknokasi", "age": 22, "gender": "male"}'

// // convert ke js object
// const obj = JSON.parse(dataJson)

// // access
// console.log(obj.nama);

// convert object ke json
// js object
// const dataJson = {"nama": "Teknokasi", "age": 22, "gender": "male"}
// // convert ke json
// const obj = JSON.stringify(dataJson)
// // access
// console.log(obj);

// OOP (object oriented programminmg) -> programming yang berorientasi object
// toko online -> barang
// nama barang, harga barang, berat, warna, dan lain-lain. 
// nama: sabun,
// harga: 3000
// warna: oren,
// berat: 250g

// // object
// const barang = {
//     // properti -> method
//     nama: "sabun",
//     harga: 3000,
//     warna: "oren",
//     berat: "250g"
// }

// mobil -> warna, berat, kecepatan, minyak, dll

// constructur dan kelas

// const barang = {
//     nama: "sabun",
//     harga: 3000,
//     detail: function() {
//         return this.nama + " " + this.harga
//     }
// }

// const barang2 = {
//     nama: "lenovo",
//     harga: 30000,
//     detail: function(){
//         return this.nama + " " + this.harga
//     }
// }

// 100 obj

// dua cara yaitu pakai constructor dan class.

// constructor -> function declaration biasa.
// constructor dengan function declaration -> huruf besar pada kata pertama nama function.
// function Person() {} // function constractor
// function person() {} // function declaratioin biasa

// function Barang(nama, harga) {
//     this.nama = nama
//     this.harga = harga
//     this.detail = function() {
//         return this.nama + " " + this.harga
//     }
// }

// const barang1 =  new Barang("Lenovo", "2 juta")
// const barang2 = new Barang("Sabub", "3000")

// console.log(barang1);
// console.log(barang2);

// class -> fitur baru js v 2015 / es6
// class Barang {
//     constructor(nama, harga) {
//         this.nama = nama,
//         this.harga = harga
//     }
//     detail() {
//         return this.nama + " " + this.harga
//     }
// }

// const barang1 =  new Barang("Lenovo", "2 juta")
// const barang2 = new Barang("Sabub", "3000")

// console.log(barang1.nama);
// console.log(barang2.harga);
// console.log(barang2.detail());

// access modifier/visibility -> atur tingkat akses property/method dalam sebuah objek -> global dan private/local

// function Barang(nama, harga, berat, warna) {
//     // public property
//     this.nama = nama
//     this.harga = harga

//     // private
//     let berat2 = berat
//     let warna2 = warna

//     // public method
//     this.detail = function() {
//         return this.nama + " " + this.harga
//     }

//     // private method
//     showBeratWarna = () => {
//         return berat2 + " " + warna2
//     }
// }

// // objek
// const barang = new Barang("Lenovo", 100, 2, "Yellow")

// console.log(barang);
// console.log(barang.nama);
// console.log(barang.berat2);
// console.log(barang.detail());
// console.log(barang.showBeratWarna);


// pilar oop -> 4 -> encapsulation, inheritance, polymorphism, abstraction

// encapsulation _> membatasi akses ke properti/method dari sebuah objek

// function Ongkir(berat) {
//     this.admin = 500,
//     this.harga = function() {
//         return berat * 1000
//     }
//     this.total = function() {
//         return this.harga() + this.admin
//     }
// }

// const laptop = new Ongkir(4)

// console.log(laptop.total()); // 4500

// keganti value dari method pajak/admin dari luar -> bukan dari function
// function Ongkir2(berat2) {
//     this.admin2 = 500,
//     this.harga2 = function() {
//         return berat2 * 1000
//     }
//     this.total2 = function() {
//         return this.harga2() + this.admin2
//     }
// }

// const laptop2 = new Ongkir2(4)
// laptop2.admin2 = 800
// console.log(laptop2.total2()); // 4800

// hasil hitungan pengaruh ke biaya secara keseluruhan

// encapsulation -> membatasi akses dari luar
// ubah property admin dari public -> private

// function Ongkir3(berat3) {
//     let admin = 500
//     let harga = function() {
//         return berat3 * 1000
//     }
//     this.total = function() {
//         return harga() + admin
//     }
// }

// const laptop = new Ongkir3(4)
// laptop.admin = 800 // tidak akan pengaruhi variable admin dalam constructor function.
// console.log(laptop.total());

// // inheritance -> kelas yang mewariskan method + property ke kelas lain atau anaknya

// class Orang {
//     constructor(nama, umur) {
//         this.nama = nama
//         this.umur = umur
//     }
// }

// class Orang2 extends Orang { // orang2 sub class dari Orang
//     constructor(nama, umur, jabatan) {
//         // kelas Orang mewariskan property yang berupa nama dan umur ke Orang2 -> pakai super.
//         super(nama, umur)
//         this.jabatan = jabatan
//     }
// }

// const karyawan = new Orang2("Teknokasi", 20, "startup")

// console.log(karyawan.nama);
// console.log(karyawan.umur);
// console.log(karyawan.jabatan);

// polymorphism -> poly (banyak) dan morphe (bentuk) -> banyak bentuk.

// smartphone -> alat komunikasi. bentuk berbagai macam -> telepon, pesan (sms) -> pesan tapi melalui aplikasi chat, bisa dengan video call dan lain-lain.

// example 1
// class Orang {
//     constructor(nama) {
//         this.nama = nama
//     }
//     sapaan() {
//         return `Hello, saya ${this.nama}`
//     }
// }

// class Orang2 extends Orang {
//     constructor(nama) {
//         super(nama)
//     }
//     sapaan() {
//         return `Hello, nama saya adalah ${this.nama}`
//     }
// }

// const intro = new Orang2("Teknokasi")
// console.log(intro.sapaan());

// example 2
class Orang {
    constructor(nama) {
        this.nama = nama
    }
    sapaan() {
        return `Hello, saya ${this.nama}`
    }
}

class Orang2 extends Orang {
    constructor(nama) {
        super(nama)
    }
    // sapaan() {
    //     return `Hello, nama saya adalah ${this.nama}`
    // }
}

const intro = new Orang2("Teknokasi")
console.log(intro.sapaan());

// kelas Orang2 walau tidak ada method sapaan -> method sapaan dari Orang.

// abstraction -> menyembunyikan detail dari sebuah objek dan hanya tampilkan yang penting dari objek tersebut.

// pergi UIB -> gocar -> bensin, mobilnya mereknya, tahun bereapa di terbit -> tidak perlu tahu. -> jarak dari rumah ke UIB -> posisi gocar.

function Ongkir(berat) {
    let berat2 = berat
    let harga = function() {
        return berat2 * 2000
    }
    this.total = function() {
        return harga()
    }
}

const laptop = new Ongkir(4)
console.log(laptop.total());

// gimana total biaya ongkir -> kalkulasi -> tidak perlu tahu. 
// yang kita perlu tahu? bagaimana cara tampilkan biaya -> dengan cara panggil function total.