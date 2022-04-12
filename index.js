// String
// Number
// BigInt -> 900719925124740999
// Boolean -> false (0) & true (1)
// undefined -> belum declare variable -> let A = 5 -> const hasil = B
// null -> const number = null
// symbol
// const value1 = Symbol('hello')
// const value2 = Symbol('hello')
// // Object
// const student = {
//     firstname: "teknokasi",
//     lastName: "batch-1 JS"
// }
// console.log(student);


// Type -> ganti variable sebelum ke yang baru
let data
// integer
data = 5
// string
data = "javascript programming"

// typeOf -> operator
const nama = "Teknokasi"
const hasil = typeof(nama)
console.log(hasil);

// number
const number = 4
const result = typeof(number)
console.log(result);

// boolean
const valueChecked = true
const result_value = typeof(valueChecked)
console.log(result_value);

// operator
// = -> assignment operator -> a = 7 // 7 -> lebih sering dipakai 

// jarang dipakai
// += -> addition assignment -> a += 5 // a = a + 5
// -= -> subtraction assignment ->  a -= 5 // a = a - 5
// *= -> multiplication assignment -> a *=5 // a =  a * 5
// /= -> division assignment -> a /=2 // a = a / 2
// %= -> remainder assignment -> a %= 5 // a = a % 5

// aritmatika operator
// + -> x + y
// - -> x - y
// * -> x * y
// / -> x / y
// % -> x % y
// ++ -> x = 1 y < 5


let x = 5
let y = 3
// addition
console.log("x + y = ", x + y);

// multiplication
console.log("x * y = ", x * y);

// comparisoon operators
// == -> equal -> TRUE -> X == y
// != -> not equal to -> x != y
// === -> strict equal to -> x === y
// !== -> strict not equal to -> x !== y

// // nilai raport dan matematika (loop)
// > -> greater than -> x > y
// >= -> greater than or equal to -> x >= y
// < -> less than -> x < y
// <= -> less than or equal to -> x <= y

// equal operator
console.log(2 == 2); // angka
console.log(2 == '2'); // string

// not equal operator
console.log(3 != 2);
console.log('hello' != "Hello");

// strict equal operator
console.log(2 === 2);
console.log(2 === '2');

// strict not equal operator
console.log(2 !== '2'); 
console.log(2 !== 2);

// logical operator
// && -> AND -> x && y
// || -> OR -> x || y
// ! -> NOT -> !x

// AND
console.log(true && true);
console.log(true && false);

// OR
console.log(true || false);
console.log(false || true);

// NOT
console.log(!true);

// conversion to string
let result_string
result_string = '3' + 2
console.log(result_string); // 32

result_string = '3' + true
console.log(result_string);

result_string = '3' + null
console.log((result_string));

// conversion to number
let result_number
result_number = "4" - "2"
console.log(result_number); // 2

result_number = "4" - 2
console.log(result_number);

result_number = "4" * 2
console.log(result_number);

result_number = "4" / 2
console.log(result_number);

result_number = 4 - 2 // operator biasa
console.log(result_number);

// NaN -> not a number
const nilaiNaN = 5 * 'u'
console.log(`nilaiNaN adalah ${nilaiNaN}`);

// undefined -> nilai belum diberikan atau diisi
let nilaiUndefined // hanya declare variable -> tidak di beri nilai
console.log(`nilai dari variable ini adalah ${nilaiUndefined}`);

// Null -> deklarasi
let nilaiNull = null
console.log(`nilai dari variable nilaiNull adalah ${nilaiNull}`);

// include
const kalimat = "saya ingin belajar coding supaya bisa diterima di perusahaan Google"
const kata_pencarian = "Apple"
console.log(kalimat)
const kata_didapat = kalimat.indexOf(kata_pencarian)
if (kalimat.includes(kata_pencarian)) {
    console.log(`kata ${kata_pencarian} ditemukan`);
}
else {
    console.log(`kata ${kata_pencarian} tidak ditemukan`);
}

// array
const namaSiswaTeknokasi = ["Hela", "Johan", "Risky"] 
namaSiswaTeknokasi.push("Teknokasi")
console.log(namaSiswaTeknokasi);

// for
for (let index in namaSiswaTeknokasi) {
    console.log(namaSiswaTeknokasi[index]);
}

// array sorting
namaSiswaTeknokasi.sort(function(a,b){
    console.log(a,b);
    return a-b
})

// array example 2 -> forEach
namaSiswaTeknokasi.forEach(item => {
    console.log(item);
})

// forEach
namaSiswaTeknokasi.forEach((item, index, array) => {
    console.log(item, index, array);
})

// map
const namaSiswaDenganAsal = namaSiswaTeknokasi.map((item, index, array)=> {
    return{
        noId: index +1,
        nama: item,
        asal: 'Batam'
    }
})
console.log(namaSiswaDenganAsal);

// property value
const first_name = "Teknokasi"
const last_name = "eduTech"
const person = {
    first_name,
    last_name
}
console.log(person);
console.log(person.last_name);

// object assign
const bodyMeasure = {
    height: '150cm',
    weight: '50kg',
    role: 'mahasiswa'
}
const personWithMeasure = Object.assign({}, person, bodyMeasure)
console.log(personWithMeasure);

// object assign
const dataBaru = {
    tanggal_lahir: '2 July 2022'
}
const personWithNewData = Object.assign(person, bodyMeasure, dataBaru)
console.log(personWithNewData);