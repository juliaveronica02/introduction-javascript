const axios = require('axios')

// cara pertama
// axios.get('http://localhost:3000/users')
// .then(res => {
//     console.log(res);
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

//cara kedua
axios.get('http://localhost:3000/users')
.then(res => {
    data = res.data
    // e = event
    data.forEach(e => {
        console.log(`${e.first_name}, ${e.age}`);
    })
})
.catch(err => {
    console.log(err);
})