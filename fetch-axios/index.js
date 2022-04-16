// restAPI
// ambil data
// update data
// delete data
// tambah data
// ambil data berdasarkan id -> ambil id yg lebih spesifik

// const { default: axios } = require("axios")

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
// const axios = require('axios');
// axios.get(URL)
// .then(res => {
//     console.log(res);
// })
// .then(data => {
//     console.log('data dari axios', data);
// })
// .catch(err => {
//     console.log(err);
// })

const tableData = document.getElementById('post-table')
const getAllData = async () => {
    try {
        const res = await axios.get('http://localhost:3000/users')
        // map -> ciptakan array
        res.data.map(item => {
            tableData.innerHTML += `
                <tr>
                    <th scope="row"> ${item.id}</th>
                    <th> ${item.first_name}</th>
                    <th> ${item.last_name}</th>
                    <th> ${item.age}</th>
                </tr>
            `
        }, console.log(res.data))
}
catch (err) {
    console.log("GET error");
}
}
getAllData()

// example 2
// axios.get('http://localhost:3000/users')
// .then(res => {
//     console.log(res);
//     const tableData = document.getElementById('post-table')
//     data = res.data

//     res.data.forEach(item => {
//         const {id, first_name, last_name, age} = item
//         const dataHTML = `
//         <tr>
//             <th scope="row">${id} </th>
//             <th>${first_name} </th>
//             <th>${last_name} </th>
//             <th>${age} </th>
//         </tr>
//         `
//         tableData.innerHTML += dataHTML
//     })
// })
// .catch(err => {
//     console.log(err);
// })