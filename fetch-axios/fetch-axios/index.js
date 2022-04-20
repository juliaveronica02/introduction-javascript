// for (var x=1; x <= 100; x++) {
//     var skip = 0;
//     if (x % 4 == 0) {
//         document.write('bull');
//         skip = 1;
//     }
//     if (x % 8 == 0) {
//         document.write('dog');
//         skip = 1;
//     }
//     if (!skip) {
//         document.write(x);
//     }
//     document.write('<br>'); //line breaks to enhance output readability
// }

// let inputNilai = 55
// function data(nilai) {
//     if ( nilai <=100 && nilai >=90) {
//         return "A";
//     } 
//     else if (nilai <90 && nilai >=75) {
//         return "B";
//     } 
//     else if (nilai >=60 && nilai <75 ) {
//         return "C";
//     } 
//     else if (nilai > 50 && nilai <60) {
//         return "D";
//     } 
//     else {
//         return "penilaian tidak sesuai";
//     }
    
// }
// for (let i = inputNilai; i <= inputNilai; i++) {
//     console.log('nilai : ' + i + ' adalah ' + data(i));   //console.log(nilai);
// }

var multiplier = 9;
for (var i = 0; i <= 2; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}