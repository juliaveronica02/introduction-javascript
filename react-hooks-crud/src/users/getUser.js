import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

// useState -> sama dengan class component untuk inisialisasi state.
// useEffect -> mirip sama componentDidMount -> untuk taruk axios (get/delete/create/edit).

function UserList(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async() => {
            const result = await axios.get('http://localhost:3000/users')
            // setData -> menampilkan data -> ambil data dari json server nnti ditampilkan ke result.data
            setData(result.data)
        }
        getData()
    }, [])
    // tidak wajib render().
    return (
        <div>
            <table>
                <thead className='btn-primary'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key = {user.id}>
                            <td> {user.first_name} </td>
                            <td> {user.last_name} </td>
                            <td> {user.age} </td>
                            <td> 
                                <button className='btn btn-warning'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList