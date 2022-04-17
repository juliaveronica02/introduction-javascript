// callback -> objek -> function sebagai paramater
// function print(res) {
//     res()
// }

// // print -> bawa function sebagai parameter dan dipanggil dari dalam. examp: dalam print kita panggilnya "res".

// const pesan = function() {
//     console.log("kode akan dikirim dalam waktu 3 detik!");
// }
// console.log(pesan);
// // setTimeout -> panggil function dan countdown.
// // 1 detik = 1000 milidetik
// setTimeout(pesan, 3000)

// arrow function -> es6 -> versi baru
// setTimeout(() => {
//     console.log("pesan ini akan muncul setelah 3 detik");
// }, 3000)

// example
// nama -> panggilNama - nama = patokan dari function panggilNama
const panggilNama = nama => console.log(`Nama saya ${nama}`);
panggilNama("Teknokasi")

const panggilNama2 = (nama, sapaan) => console.log(`${nama}, ${sapaan}`);
panggilNama2("Teknokasi", "Selamat malam")

// tidak mau buat patokan
const sapaan = () => console.log("selamat malam semua");
sapaan()