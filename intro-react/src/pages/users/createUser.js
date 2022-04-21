import React from 'react'
import axios from 'axios'

class CreateUser extends React.Component{
       // oop 
       // langkah 1 -> declare variable first_name, last_name, sama age.
    constructor(props) {
        super(props)
        // langkah 2 -> bisa letak di setelah this.state or sebelum this.state (sebelum this.state)
        this.onUserFirstName = this.onUserFirstName.bind(this)
        this.onUserLastName = this.onUserLastName.bind(this)
        this.onUserAge = this.onUserAge.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            first_name: '',
            last_name: '',
            age: ''
        }
        // setelah this.state.
        // this.onUserFirstName = this.onUserFirstName.bind(this)
        // this.onUserLastName = this.onUserLastName.bind(this)
        // this.onUserAge = this.onUserAge.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
    }
    // langkah ke 3 -> declarekan function dari this.on -> akan simpan value
    onUserFirstName(e) {
        this.setState({first_name: e.target.value})
    }

    onUserLastName(e) {
        this.setState({last_name: e.target.value})
    }

    onUserAge(e) {
        this.setState({age: e.target.value})
    }

    // langkah setelah create function this.on -> handle setelah value dah ada kita mau submit dan kesimpan dalam database.
    onSubmit(e) {
        // untuk menetapkan hasil yang sudah diisi.
        e.preventDefault()
        axios.post('http://localhost:3000/users', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
        })
        .then(res => console.log(res.data))
        this.setState({first_name: '', last_name:'', age: ''})
    }

    render() {
        return(
            <div>
                <h2>Add User</h2>
                {/* <form onSubmit={this.handleSubmit}> */}
                <form onSubmit={this.onSubmit}>
                <label>
                    First Name
                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.onUserFirstName}/>
                </label>
                <label>
                    Last Name
                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.onUserLastName}/>
                </label>
                <label>
                    Age
                    {/* value: untuk tampung data dan onChange ambil dari oop punya state */}
                    <input type="number" name="age" value={this.state.age} onChange={this.onUserAge}/>
                </label>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateUser