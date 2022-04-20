import React from 'react'
import '../assets/style.css'
// link -> a href di html -> URL
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <img className='pic' src="https://s4.bukalapak.com/img/457590103/s-400-400/41KTjPYe3yL.jpg" alt='test' />
            </div>
            <div className='bg-color'>
                <ul className='ul'>
                    <li className='li'> <Link to="/"> HOME </Link></li>
                    <li className='li'> <Link to="/about"> ABOUT </Link></li>
                    <li className='li'> <Link to="/portfolio"> PORTFOLIO </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar