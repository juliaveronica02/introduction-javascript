import React from 'react'
import axios from 'axios'
import {Table, Button} from 'react-bootstrap'

// class component
const URL = 'http://localhost:3000/users'
class GetUser extends React.Component {
    // oop
    // props -> passing data
    constructor(props) {
        super(props) 
        this.state = {
            error: null,
            users:[],
            response: {}
        }
    }

    componentDidMount() {
        axios.get(URL).then(response => response.data)
        .then((result)=> {
            this.setState({users:result})
        },
        (err) => {
            this.setState({err})
        }
        )
    }

    render() {
        // handling error
        const {error, users} = this.state
        if(error) {
            return(
                <div>Error: {error.message} </div>
            )
        } else {
            // tampilkan UI
            return (
                <div>
                    {/* tampilan UI menggunakan react-bootstrap */}
                    <Table>
                        <thead className='btn-primary'>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                {/* action untuk button edit dan delete */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td> 
                                        <Button varian="info"> Edit</Button> 
                                        <Button varian="danger"> Delete</Button> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }

}

export default GetUser