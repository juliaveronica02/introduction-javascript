import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function MapelList(props) {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const GetData = async () => {
            const result = await axios.get('http://localhost:8000/mapel/show')
            setData(result.data)
        }
        GetData()
    }, [])

    const editMapel = (id) => {
        navigate({
            pathname: '/EditMapel/' + id
        })
    }

    const deleteMapel = (id) => {
        axios.delete('http://localhost:8000/mapel/delete/' + id)
       .then((res) => setData(data.filter((data) => data.id !==id)))
       .catch((err) => console.log(err))
    }

    return(
        <div>
            <table>
                <thead className='btn-primary'>
                    <tr>
                        <th> Id</th>
                        <th> Nama</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(mapel => (
                        <tr>
                            <td> {mapel.id} </td>
                            <td> {mapel.nama} </td>
                            <td> 
                                <div className='btn-group'>
                                    <button className='btn btn-warning' onClick={() => {editMapel(mapel.id)}}> Edit </button>
                                    <button className='btn btn-danger' onClick={() => {deleteMapel(mapel.id)}}> Delete </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MapelList