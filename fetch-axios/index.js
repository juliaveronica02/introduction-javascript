// restAPI
// ambil data
// update data
// delete data
// tambah data
// ambil data berdasarkan id -> ambil id yg lebih spesifik

// fetch
// fetch ('path') 
// .then((res) => {
//     // code untuk handle respon (res)
// })
// .catch((err) => {
//     // code untuk handle error
// })

// axios

// const axios = require('axios')
// axios.get('url')
// .then((res)=> {
//     // handle res
// })
// .catch((err) => {
//     // handle err
// })

// example API github - followers
const URL = 'https://api.github.com/users/juliaveronica02/followers'

//fetch
// fetch(`${URL}`)
// .then((res)=> {
//     return res.json()
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

// axios
const axios = require('axios');
axios.get(URL)
.then(res => {
    console.log(res);
})
.then(data => {
    console.log('data dari axios', data);
})
.catch(err => {
    console.log(err);
})

// crud -> json

