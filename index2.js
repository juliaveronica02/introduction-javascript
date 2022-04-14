// control flow
// if else statement
// if 
// if... else if ... else

// if statement
// if (condition) {
//     //code
// }

let number = 2
if (number > 0) {
    // code
}
// code setelah if.

// example 1

// number positive
// const angka = prompt("enter a number: ");

// // check jika dia lebih besar dari 0
// if (angka > 0) {
//     console.log("the number is positive");
// }

// console.log("contoh 1 statement if");

// if else statement
// if (condition) {
//     // code
// } else {
//     // code
// }

// example 2

// angkanya itu positive atau negative ataupun nol
// const angka2 = prompt("enter a number: ")

// // angka lebih besar dari 0
// if (angka2 > 0) {
//     console.log("the number is positive");
// } else {
//     // jika nomornya tidak lebih besar dari 0 (negative/nol)
//     console.log(("the number is either a negative number or 0"));
// }

// console.log("contoh kedua menggunakan statement if else");

// // if.. else if statement
// if (condition1) {
//     // code
// } else if (condition2) {
//     //code
// } else {
//     // code
// }

// example 3
// const angka3 = prompt("enter a number: ")

// // check jika angkanya lebih besar dri 0
// if (angka3 > 0) {
//     console.log("the number is positive");
// } else if (angka3 == 0) {
//     // cek jika angkanya adalah 0
//     console.log("the number is 0");
// } else {
//     // angkanya bukan lebih besar dari 0 maupun 0
//     console.log("the number is negative");
// }

// console.log("if.. else if.. else statement");

// nested if...else statement
// cek angkanya apakah dia positive, negative atau 0
// const angka = prompt("enter a number: ")

// if (angka >=0) {
//     if (angka == 0) {
//         console.log("kamu memasukkan angka 0");
//     } else {
//         console.log("kamu memasukkan angka lebih besar dari 0");
//     }
// } else {
//     console.log("kamu memasukkan angka negative");
// }

// if..else dengan 1 statement
// const angka = -2
// if (angka > 0)
// console.log("angka bersifat positif");
// else
// console.log("angka bersifat negatif");

// looping
// for loop
//  for (initialExpression (variable); condition (true/false); updateExpression) {
//      // code
//  }

// example -> huruf

// const n = 5

// // loop dari angka 1-5
// for (let i=1; i <= n; i++) {
//     console.log("hasil");
// }

// example bentuk angka
// const a = 5

// // loop dari angka 1-5
// for (let i = 1; i <= a; i++) {
//     console.log(i); 
// }

// while dan do..while loop

// while (condition) {
//     // code
// }

// let i = 1, n = 10

// while (i <=n) {
//     console.log(i);
//     i += 1;
// }

// do..while loop
// do {
//     //code
// } while (condition)

// example
//  let i = 1
//  const a = 5

//  do {
//      console.log(i);
//      i++
//  } while(i <= a)

// // infinite while loop
// while (true) {
//     // code
// }

// // do..while
// const count = 1
// do {
//     // code
// } while (count == 1)

// // example 

// let ab = 0
// while (ab < 10) {
//     console.log(ab);
// }

// // switch statement
// switch (variable/expressi) {
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     case valueN:
//         // code
//         break;
//     default:
//         // code
//         break;
// }

// example
// let T = 100
// switch (T) {
//     case 1:
//         T = 'one'
//         break;
//     case 2:
//         T = "two"
//         break;
//     default:
//         T = "not found"
//         break;
// }
// console.log(`the value is ${T}`);

// example calculator

// let hasil

// // operator action
// const operator = prompt("enter operator (+, -. *, /): ")

// // operator number -> parseFloat untuk bilangan bulat
// const number1 = parseFloat(prompt("enter first number: "))
// const number2 = parseFloat(prompt("enter second number: "))

// switch(operator) {
//     case '+':
//         hasil = number1 + number2
//         console.log(`${number1} + ${number2} = ${hasil}`);
//         break;
//     case '-':
//         hasil = number1 - number2
//         console.log(`${number1} - ${number2} = ${hasil}`);
//         break;
//     case '*':
//         hasil = number1 * number2
//         console.log(`${number1} * ${number2} = ${hasil}`);
//         break;
//     case '/':
//         hasil = number1 / number2
//         console.log(`${number1} / ${number2} = ${hasil}`);
//         break;
//     default:
//         console.log("invalid operator");
//         break
// }

// switch multiple case

// let nama = "Teknokasi"
// switch(nama) {
//     case 'Hela':
//     case 'Johan':
//     case 'Risky':
//         console.log(`${nama} is a name.`);
//         break;
//     default:
//         console.log(`${nama} is not a name`);
//         break;
// }

// function
// function namaFunction () {
//     // code
// }
// call function

// example
// function sapaan() {
//     console.log("Halo!");
// }
// sapaan()

// example
// function perkenalanDiri(nama){
//     console.log("Hello" + nama + "!");
// }

// let nama = prompt("enter a name: ")

// perkenalanDiri(nama)

// example
// function tambah(a, b) {
//     console.log(a + b);
// }
// tambah(3, 4)
// tambah(6,8)

// function return
// function add(c,d) {
//     return c + d
// }
// let number1 = parseFloat(prompt("enter first number: "))
// let number2 = parseFloat(prompt("enter second number: "))

// let hasil = add(number1, number2)
// console.log("hasil " + hasil);

// global dan local scope -> c# public sama private

// global
// let a = "hello"
// function sapaan() {
//     console.log(a);
// }
// sapaan()

// global change value
// let b = "hi"

// function greeting() {
//     b = 3
// }
// // nilai sebelum memanggil function
// console.log(b);
// greeting()
// // nilai setelah memanggil function
// console.log(b);

// local / private
let a = "hi"

function greeting() {
   let b = 3
    console.log(a + b);
}
greeting()
console.log(a + b); // error

