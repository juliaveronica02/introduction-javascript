// put -> edit
const axios = require('axios')
axios.put('http://localhost:3000/users/1', {
    first_name: "Budi",
    last_name: "Gunawan",
    age: 21
})
.then(res => {
    console.log(res.data);
})
.catch(err => {
    console.log(err);
})