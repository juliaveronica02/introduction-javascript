const axios = require('axios')
axios.delete('http://localhost:3000/users/2')
.then (res => {
    console.log(res.data);
})
.catch(err => {
    console.log(err);
})