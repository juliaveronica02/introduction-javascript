import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function CreateUser(props) {
    const URL = 'http://localhost:3000/users'

    const [user, setUser] = useState({first_name: '', last_name: '', age: ''})
    // e = event
    const insertUser = (e) => {
        e.preventDefault()
        const data = {first_name: user.first_name, last_name: user.last_name, age: user.age}
        axios.post(URL, data)
        .then(result => {
            console.log(result.data);
        })
    }

    const onChange = (a) =>{
        // untuk keluarkan data yang diinput.
        a.persist()
        setUser({...user, [a.target.name]: a.target.value})
    }

    return(
        <div className='align-items-center'>
            <h2>Add User</h2>
            <form onSubmit={insertUser}>
                <label>
                    First Name:
                    <input type="text" name="first_name" value={user.first_name} onChange={onChange}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="last_name" value={user.last_name} onChange={onChange}/>
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={user.age} onChange={onChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser