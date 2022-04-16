const axios = require('axios')
axios.post('http://localhost:3000/users', {
    id: 2,
    first_name: "kath",
    last_name: "thrine",
    age: 21
})
.then(res => { // res data
    // data-> dari post -> jalankan kenak sebagai data -> tidak deklarasi variable data.
    console.log(res.data);
})
.catch(err => {
    console.log(err);
})